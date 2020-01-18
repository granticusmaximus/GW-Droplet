import React, { Component, PropTypes } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import 'react-quill/dist/quill.snow.css';
import Editor from './Editor';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import fire from "../../components/Firebase/firebase.js";


class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTitle: '',
            description: '',
            postLists: [],
            editing: false,
            error: null,
        };
        this.handleChange = this._handleChange.bind(this)
    }
    componentDidMount() {
        // console.log(firebase)
        const myPost = fire.database().ref("posts/");
        // console.log(myPost)
        myPost.on("value", snapshot => {
            const myPostFromDatabase = snapshot.val();
            if (myPostFromDatabase === null) {
                console.log("Posts at our firebase is null");
            } else {
                const lists = Object.keys(snapshot.val()).map(key => {
                    return {
                        key: key,
                        postTitle: myPostFromDatabase[key].postTitle,
                        description: myPostFromDatabase[key].description
                    };
                });
                this.setState({
                    postLists: lists
                });
            }
        });
    }

    _savePost = e => {
        if (this.state.postTitle === "") {
            alert("Post title cannot be empty");
        } else {
            const newPostKey = fire
                .database()
                .ref("posts/")
                .push().key;

            fire
                .database()
                .ref("posts/")
                .update({
                    [newPostKey]: {
                        postTitle: this.state.postTitle,
                        description: this.state.description
                    }
                });
            this.setState({
                postTitle: "",
                description: ""
            });
        }
    };

    handleChange(value) {
        this.setState({ text: value })
    };

    _handleChange = event => {
        this.setState({ [event.target.title]: event.target.value });
    };


    render() {
        return (
            <div className="container-body">
                <div className="row">
                    <h2>Add New Post</h2>
                </div>
                <hr />
                <Form>
                    <FormGroup>
                        <div className="col-md-6">
                            <h3>Enter Title</h3>
                            <Input
                                type="text"
                                name="postTitle"
                                value={this.state.title}
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
                    <Button outline color="success">Save Post</Button>{' '}
                    <Button outline color="danger"><Link to={ROUTES.ADMIN}>Cancel Post</Link></Button>
                </Form>
            </div>
        )
    }
}

export default NewPost;