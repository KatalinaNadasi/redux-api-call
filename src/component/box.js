import React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions'

class Box extends React.Component {
  render() {
    return(
      <div style={{backgroundColor: `blue`}}>
        <button>Change color</button>
      </div>
    )
  }
}

const mapStateToProps=(state)=> {
  return state
};

export default connect(mapStateToProps, actionsCreators)(Box);
