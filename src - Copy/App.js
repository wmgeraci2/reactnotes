import React, { Component } from  'react';
import Note from './Note/Note';
import Noteform from './Noteform/Noteform'
import './Note/Note.css';
import './Noteform/Noteform.css'

import { DB_CONFIG} from './Config/Config';
import firebase from 'firebase/app';
import 'firebase/database';

import './App.css';

const app = firebase.initializeApp(DB_CONFIG);
const database = app.database().ref().child("notes");
const previousNotes = null;


class App extends Component {

    constructor(props){
        super(props);
        this.addNote.bind(this);

        // We are setting op the React state of the component
        //WMG although I think it is setting up
        this.state = {  
            notes: [],
        }
    }

    componentDidMount(){
         previousNotes = this.state.notes;

        //DataSnapshot - view into the database element???
      database.on('child_added', snap => {
            previousNotes.push({
                id: snap.key,
                noteContent: snap.val().noteContent,
            })
            this.setState({
                notes: previousNotes
            })
        })
    }

    addNote(note) {
         previousNotes = this.state.notes;
        previousNotes.push({ id: previousNotes.length + 1, noteContent: note});
        this.setState({
            notes: previousNotes
        });
    }

    render() {
        return (
        <div className="notesWrapper">
            <div className="notesHeader">
                <div className="Heading">React & Firebase To-do List</div>
            </div>
            <div className="notesBody">
                {
                    this.state.notes.map((note) => {
                        return (
                            <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />
                        )
                    })
                }
            </div>
            <div className="notesFooter">
                <Noteform addNote={this.addNote} />
            </div>
        </div>
      )
    }
}

export default App;
