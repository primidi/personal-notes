import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import { getInitialData } from '../utils';

export default class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchText: '',
    };

    this.onChangeSearchText = this.onChangeSearchText.bind(this);
    this.onSubmitNote = this.onSubmitNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onActivateNote = this.onActivateNote.bind(this);
  }

  onChangeSearchText = (e) => {
    const { value } = e.target;
    this.setState({
      searchText: value,
    });
  };

  onSubmitNote = (note) => {
    this.setState((prevState) => ({
      notes: [...prevState.notes, note],
    }));
  };

  onDeleteNote = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  };

  onArchiveNote = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      }),
    }));
  };

  onActivateNote = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      }),
    }));
  };

  render() {
    return (
      <>
        <Header
          searchText={this.state.searchText}
          onChangeSearchText={this.onChangeSearchText}
        />
        <Body
          notes={this.state.notes}
          onSubmit={this.onSubmitNote}
          onDeleteNote={this.onDeleteNote}
          onArchiveNote={this.onArchiveNote}
          onActivateNote={this.onActivateNote}
        />
      </>
    );
  }
}
