import React, { Component } from  'react';
import Note from './Note/Note';
import Noteform from './Noteform/Noteform'
import './App.css';


// Testing out GIT Push from PC
class App extends Component {
    constructor(props){
        super(props);
        this.addNote.bind(this);

        // We are setting ou the React state of the component
        this.state = {  
            notes: [
                { id: 1, noteContent: 'Note 1 here!' },
                { id: 2, noteContent: 'Note 2 here!' },
            ],
        }
    }

    addNote(note) {
        //Push the note on to the notes array!!
        const previousNotes = this.state.notes;
        previousNotes.push({ id: previousNotes.length + 1, noteContent: note });

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
