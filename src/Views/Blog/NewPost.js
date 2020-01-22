import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import 'react-quill/dist/quill.snow.css';
import Editor from './Editor';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../../components/Firebase';


class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTitle: '',
            description: '',
            loading: false,
            postLists: [],
            editing: false,
            error: null,
        };
    }
    componentDidMount() {
        this.onListenForPosts();
    }

    onListenForPosts = () => {
        this.setState({ loading: true });

        this.props.firebase
            .posts()
            .orderByChild('createdAt')
            .limitToLast(this.state.limit)
            .on('value', snapshot => {
                const postObject = snapshot.val();

                if (postObject) {
                    const postList = Object.keys(postObject).map(key => ({
                        ...postObject[key],
                        uid: key,
                    }));

                    this.setState({
                        post: postList,
                        loading: false,
                    });
                } else {
                    this.setState({ posts: null, loading: false });
                }
            });
    };

    componentWillUnmount() {
        this.props.firebase.posts().off();
    }

    onChangeText = event => {
        this.setState({ text: event.target.value });
    };

    savePost = (event) => {
        this.props.firebase.posts().push({
            description: this.state.description,
            postTitle: this.state.postTitle,
            createdAt: this.props.firebase.serverValue.TIMESTAMP,
        });

        this.setState({
            description: '',
            postTitle: ''
        });

        event.preventDefault();
    };

    _handleChange = event => {
        this.setState({ [event.target.title]: event.target.value });
    };


    render() {
        const { postTitle, description, loading } = this.state;
        return (
            <div className="container-body">
                <div className="row">
                    <h2>Add New Post</h2>
                </div>
                <hr />
                <Form
                    onSubmit={event =>
                        this.savePost(event)
                    }
                >
                    <FormGroup>
                        <div className="col-md-6">
                            <h3>Enter Title</h3>
                            <Input
                                type="text"
                                name="postTitle"
                                value={postTitle}
                                onChange={this._handleChange}
                                id="postTitle"
                                placeholder="Think of an awesome title!"
                            />
                        </div>
                    </FormGroup>
                    <div className="row">
                        <div className="col-md-12">
                            <Editor
                                type="text"
                                name="description"
                                value={description}
                                onChange={this._handleChange}
                                id="description"
                                placeholder="Think of something awesome to write!"
                            />
                        </div>
                    </div>
                    <hr />
                    <Button outline color="success" type="submit">Save Post</Button>{' '}
                    <Button outline color="danger"><Link to={ROUTES.ADMIN}>Cancel Post</Link></Button>
                </Form>
            </div>
        )
    }
}
export default withFirebase(NewPost);