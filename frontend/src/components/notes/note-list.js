import React from 'react';
import NoteForm from './note-form';
import Note from './note';

const renderIf = (test, component, alternative) => {
    return test ? component : alternative
}

class NoteList extends React.Component{
    constructor(props){
        super(props);
    }

render() {
    return (
        <div className="notesList">{
            renderIf(
                this.props.noteArray.length, 
                <table>
                    <thead>
                    <tr>
                        <th colSpan='2'>Notes:</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        this.props.noteArray.map((note,i) =>
                            <tr key={i}>
                                <td><a onClick={() => this.props.deleteHandler(note)} href="#">x</a></td>
                                <td onDoubleClick={()=>this.props.updateHandler(note)} >{note.content}</td>
                                {/* <td ><Note note={note} updateHandler={this.props.updateHandler} /></td> */}
                            </tr>
                        )
                        }
                    </tbody>
                </table>,
                <p>NO NOTES.CREATE ONE</p>
            )
        }
    </div>
)        
}
}
export default NoteList;