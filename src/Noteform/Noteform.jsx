import React, { Component } from 'react';
import './Noteform.css';

class Noteform extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render(){
        return(
            <div className="formWrapper">
                <input className="NoteInput"></input>
                placeholder="Write a new note..."/>
                <button className="noteButton">Add Note</button>
            </div>

        )
    }
}

export default Noteform;
