import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import 'react-quill/dist/quill.snow.css';
import Editor from './Editor';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import fire from '../Firebase';


class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTitle: '',
            description: '',
            loading: false,
            dataPosts: [],
            error: null,
        };
    }
    componentDidMount() {
        const myPost = fire.database().ref("posts/");
        // console.log(myCard)
        myPost.on("value", snapshot => {
            const myPostFromDatabase = snapshot.val();
            // console.log(myCardFromDatabase)
            if (myPostFromDatabase === null) {
                console.log("Posts at our firebase is null");
            } else {
                const posts = Object.keys(snapshot.val()).map(key => {
                    return {
                        key: key,
                        postTitle: myPostFromDatabase[key].postTitle,
                        description: myPostFromDatabase[key].description,
                        listKey: myPostFromDatabase[key].listKey
                    };
                });
                this.setState({
                    dataPosts: posts
                });
            }
        });
    }

    onChangeText = event => {
        this.setState({ text: event.target.value });
    };

    _savePost = (key, pTitle, pDescript, e) => {
        // console.log("key from card");
        // console.log(key.key);
        // console.log("title from card:");
        // console.log(title.title);
        if (this.state.postTitle === "") {
            alert("Title cannot be empty");
        } else {
            const newPostey = fire
                .database()
                .ref("posts/")
                .push().key;

            fire
                .database()
                .ref("posts/")
                .update({
                    [newPostey]: {
                        listKey: key.key,
                        postTitle: pTitle.postTitle,
                        description: pDescript.description
                    }
                });

            this.setState({
                postTitle: "",
                descriptiom: ""
            });
        }
    };

    _handleChange = event => {
        this.setState({ [event.target.title]: event.target.value });
    };

    _handleDeletePost = key => {
        fire
            .database()
            .ref(`posts/${key}`)
            .remove();

        console.log("Successfully deleted Post");
        const myPostLength = this.state.dataPosts.length;
        // console.log(myCardLength)
        if (myPostLength === 1) {
            this.setState({
                dataPosts: []
            });
        }
    };

    render() {
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
                                value={this.state.postTitle}
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
                                value={this.state.description}
                                onChange={this._handleChange}
                                id="description"
                                placeholder="Think of something awesome to write!"
                            />
                        </div>
                    </div>
                    <hr />
                    <Button 
                        onClick={(postTitle, description) =>
                            this._saveCard(
                                { postTitle },
                                { description }
                            )
                        }
                        outline color="success" type="submit">
                            Save Post
                    </Button>{' '}
                    <Button outline color="danger"><Link to={ROUTES.ADMIN}>Cancel Post</Link></Button>
                </Form>
            </div>
        )
    }
}

export default NewPost;