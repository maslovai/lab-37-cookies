import React from 'react';
import NoteForm from './note-form';

class Note extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        editing:false
    }

    this.toggleEditState = this.toggleEditState.bind(this);
}

toggleEditState() {
    let editing = !this.state.editing;
    this.setState({editing});
}

    render() {
        return (
        <li  onDoubleClick={()=>{this.toggleEditState; this.props.updateHandler(note)} }>
        {
            this.state.editing ? <NoteForm note={this.props.note} handler={this.props.updateHandler} toggle={this.toggleEditState} />:this.props.note.content
        }
        </li>
    )}
}

export default Note;