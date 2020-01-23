import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import 'react-quill/dist/quill.snow.css';
import Editor from './Editor';
import fire from '../Firebase/fire';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    postTitle: '',
    postDescription: '',
    loading: false,
    dataPosts: [],
    error: null,
};


class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTitle: '',
            postDescription: '',
            loading: false,
            dataPosts: [],
            error: null,
        };
    }
    componentDidUpdate(prevProps, prevState) {
        // check on previous state
        // only write when it's different with the new state
        if (prevState !== this.state) {
            this.writePostData();
        }
    }

    writePostData = () => {
        fire.database().ref('posts').set(this.state);
        console.log('DATA SAVED');
    }

    buttonSave = () => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ADMIN);
    };

    _handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="pageHeader">Add New Post</div>
                </div>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <input type='hidden' ref='uid' />
                        <div className="col-md-6">
                            <Input
                                value={this.state.postTitle}
                                onChange={this._handleChange}
                                type="text"
                                name="postTitle"
                                ref='postTitle'
                                id="postTitle"
                                placeholder="Enter a Title!"
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Input
                                    value={this.state.postDescription}
                                    onChange={this._handleChange}
                                    className="textareaT4"
                                    type="textarea"
                                    name="description"
                                    ref='description'
                                    id="description"
                                    placeholder="Think of something awesome to write!"
                                />
                            </div>
                        </div>
                    </FormGroup>

                    <hr />
                    <Button
                        outline color="success" type="submit"
                        onClick={this.buttonSave}
                    >
                        Save Post
                    </Button>{' '}
                </Form>
            </div>
        )
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let postTitle = this.refs.postTitle.value;
        let description = this.refs.postDescription.value;
        let uid = this.refs.uid.value;

        if (uid && postTitle && description) {
            const { posts } = this.state;
            const postIndex = posts.findIndex(data => {
                return data.uid === uid
            });
            posts[postIndex].postTitle = postTitle;
            posts[postIndex].description = description;
            this.setState({ posts });
        }
        else if (postTitle && description) {
            const uid = new Date().getTime().toString();
            const { posts } = this.state;
            posts.push({ uid, postTitle, description })
            this.setState({ posts });
        }

        this.refs.postTitle.value = '';
        this.refs.postDescription.value = '';
    }

    removeData = (post) => {
        const { posts } = this.state;
        const newState = posts.filter(data => {
            return data.uid !== post.uid;
        });
        this.setState({ posts: newState });
    }

    updateData = (post) => {
        this.refs.uid.value = post.uid;
        this.refs.postTitle.value = post.postTitle;
        this.refs.postDescription.value = post.postDescription;
    }
}

export default NewPost;