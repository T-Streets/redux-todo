import React, { Component } from 'react';
import { connect } from 'react-redux'

/**
 * Remove this and add this array to the store instead. Then hook this component up to pull stickyNotes in from the store.
 */
const stickyNotes = [
    "Matt & Jessica want to stop by tomorrow night for dinner.",
    "Code bug is on line 87 of floor-plan.js",
];

class StickyNotes extends Component {
  render() {
    return (
      <div className="sticky-notes">
        {
            stickyNotes.map(note => <div className="sticky-note" key={note}>{ note }</div>)
        }
      </div>
    );
  }
}

export default connect(null)(StickyNotes)
