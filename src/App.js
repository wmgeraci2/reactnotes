import React, { Component } from  'react';
import Note from './Note/Note';
import './App.css';
import Noteform from './Noteform/Noteform';

// Testing out GIT Push from PC
class App extends Component {
    constructor(props){
        super(props);

        // We are setting ou the React state of the component
        this.state = {  
            notes: [
                { id: 1, noteContent: 'Note 1 here!' },
                { id: 2, noteContent: 'Note 2 here!' },
            ],
        }
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
                <Notesform />
            </div>
        </div>
      )
    }
}

export default App;
