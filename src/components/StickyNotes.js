import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getStickyNotes } from '../selectors/stickySelector'

class StickyNotes extends Component {
  render() {
    let { stickyNotes } = this.props
    console.log(stickyNotes)
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

export default connect(state => {
  return {
    stickyNotes: getStickyNotes(state)
  }
})(StickyNotes)
