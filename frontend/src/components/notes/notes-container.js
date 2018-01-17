import React from 'react';
import {connect} from 'react-redux';

import NoteForm from './note-form';
import NoteList from './note-list';

import * as actions from '../../app/action';

class Notes extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.noteInitialize();
    }

    render() {
// console.log('render', this.props)
        return (
            <React.Fragment>
                <NoteForm handler={this.props.noteCreate} edit="false" button="add note" />
                <NoteList noteArray={this.props.noteArray} handler={this.props.noteUpdate} deleteHandler={this.props.noteDelete} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		noteArray: state.note
	}
}

const mapDispatchToProps = (dispatch, getState) => {
	return {
		noteCreate: note => dispatch(actions.noteCreate(note)),
        noteUpdate: note => dispatch(actions.noteUpdate(note)),
        noteDelete: note => dispatch(actions.noteDelete(note)),
        noteInitialize: () => dispatch(actions.noteInitialize()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes, NoteList)