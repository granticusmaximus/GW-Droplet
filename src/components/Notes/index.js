import React, { Component } from 'react';
import { fire } from "../Firebase/fire";

class Notes extends Component {
    constructor() {
        super();
        this.state = {
            noteTitle: '',
            noteBody: '',
            notes: []
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const notesRef = fire.database().ref('notes');
        const note = {
            title: this.state.noteTitle,
            body: this.state.noteBody
        }
        notesRef.push(note);
        this.setState({
            noteTitle: '',
            noteBody: ''
        });
    }

    componentDidMount() {
        const notesRef = fire.database().ref('notes');
        notesRef.on('value', (notesRes) => {
            let notes = notesRes.val();
            // console.log(notes)
            let newState = [];
            for (let note in notes) {
                newState.push({
                    id: note,
                    title: notes[note].title,
                    body: notes[note].body
                });
            }
            this.setState({
                notes: newState
            });
        });
    }

    deleteNote(noteId) {
        const noteRef = fire.database().ref(`/notes/${noteId}`);
        noteRef.remove();
    }



    render() {
        return (
            <div className="App">
                <header>
                    <div className='wrapper'>
                        <h1>Notes</h1>
                    </div>
                </header>
                <div className='container'>
                    <section className='create-note'>
                        <form>
                            <input
                                type="text"
                                name="noteTitle"
                                placeholder="Note Title"
                                onChange={this.handleChange}
                                value={this.state.noteTitle}
                            />
                            <input
                                type="text"
                                name="noteBody"
                                placeholder="Note Body"
                                onChange={this.handleChange}
                                value={this.state.noteBody}
                            />
                            <button>Create note</button>
                        </form>
                    </section>
                    <section className='display-note'>
                        <div className='wrapper'>
                            <ul>
                                {this.state.notes.map((note) => {
                                    return(
                                        <li key={note.id}>
                                        <h3>{note.title}</h3>
                                        <p>{note.body}</p>

                                        <button onClick={() => this.deleteNote(note.id)}>Delete Note</button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default Notes;