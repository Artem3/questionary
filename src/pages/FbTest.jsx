import React, { Component } from 'react';
import { db } from '../services/firebase.js';

export default class FbTest extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    db.ref('allNodes/001').on('value', (snapshot) => {
      let allNotes = [];
      snapshot.forEach((snap) => {
        allNotes.push(snap.val());
      });
      this.setState({ notes: allNotes });
    });
  }

  render() {
    return (
      <div id="fbtest-wrapper">
        {this.state.notes.map((note) => {
          return <div key={note.note_id}>{note.content}</div>;
        })}
      </div>
    );
  }
}
