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
        <form style={{ position: 'absolute', transform: 'translate(-325px)', width: '250px', height: '100px' }}>
           <textarea type="text" style={{ width: '100%', height: '100%', fontSize: '15px' }}/>
           
           <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <button>Add Sticky Note</button>
           </div>
        </form>

        {
            stickyNotes.map(note => <div className="sticky-note" key={note}>{ note }</div>)
        }
      </div>
    );
  }
}

export default connect(null)(StickyNotes)
