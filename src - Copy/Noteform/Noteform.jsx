import React, { Component } from 'react';
import './Noteform.css';

class Noteform extends Component {
    constructor(props) {
        super(props);
        this.state={
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    // called on change event from user input - set the newNoteContent
    // to the value of what the user typed in the input box :-)
    handleUserInput(e){
        // see each character event console.log(this);
        this.setState({
            newNoteContent: e.target.value, //the value of the text input
        })
    }

    writeNote(){
       //call a method which sets a noteNoteContent 
       // to the value of the input
       this.props.addNote(this.state.newNoteContent)

       //Once using the note string set back to empty by initializating
       //newNoteContent to single quotes...
       this.setState({
           newNoteContent: '',
       }) 
    }
    
    render(){
        return(
            <div className="formWrapper">
                <input className="NoteInput"
                placeholder="Write a new note..."
                value={this.state.newNoteContent}
                onChange={this.handleUserInput}/>
                <button className="noteButton"
                onClick={this.writeNote}>Add Note</button>
            </div>

        )
    }
}

export default Noteform;
