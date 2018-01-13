import uuid from 'uuid/v4';
import React from 'react';

class NoteForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            editing:false,
            content:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNewNote = this.handleNewNote.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }
    
    handleNewNote(e) {
        e.preventDefault();
        console.log('CURRENT note:::::::', this.state)
        this.props.handler(this.state);
    }

    render() {
        return (
            <form className = 'noteForm' onSubmit={this.handleNewNote}>
                <input placeholder="Type Note" type="textarea" name="content" onChange={this.handleChange} />
                <button type="submit">Add Note</button>
            </form>
        )
    }
}

export default NoteForm;