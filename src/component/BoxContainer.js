import React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions';
import PropTypes from 'prop-types';

import Box from './Box';


function BoxContainer({ loadColor, color }) {

  return (
    <Box loadColor={loadColor} backgroundColor={color} />
  )
}

BoxContainer.propTypes = {
  loadColor: PropTypes.func,
  color: PropTypes.string,
}

const mapStateToProps=(state)=> ({
  color: state.color,
  loadColor: state.color,
});

export default connect(mapStateToProps, actionsCreators)(BoxContainer);
