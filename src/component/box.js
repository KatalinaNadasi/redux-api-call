import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions';
import PropTypes from 'prop-types';

import axios from 'axios';

function Box({ color, loadColor }) {

  const [bgdColor, setBgdColor] = useState('')

  const fetchNewColor = async () => {
    const result = await axios(
      'http://www.colr.org/json/color/random'
    );
    setBgdColor(result.data.new_color)
  }


  const Center = {
    padding: '1rem',
    margin: '0 8rem',
    borderRadius: '5px',
    color: 'white'
  }

  const button = {
    padding: '1rem',
    margin: '0 8rem',
    border: '3px solid black',
    borderRadius: '5px',
    color: 'grey',
  }

console.log('yo', color)
  return (
    <div style={{
      backgroundColor: `#${bgdColor}`,
      height: '100vh',
      display: 'flex',
    }}>
      <div style={Center}>
        <h1>Click in &darr; button to change the background color !</h1>
        <button
          style={button}
          onClick={() => fetchNewColor()}
        >Change color with React</button>
        <button
          style={{ ...button, color: 'white', backgroundColor: `${color.color}` }}
          onClick={() => {loadColor()}}
        >My new color fetched with Redux-thunk : {color.color}</button>
        <h1 style={{ marginLeft: '25rem'}}>Change the background of &uarr; button !</h1>
        <h2 style={{ marginLeft: '25rem'}}>(by clicking on it)</h2>
      </div>
    </div>
  )
}

Box.propTypes = {
  loadColor: PropTypes.func,
  color: PropTypes.string,
}

const mapStateToProps=(state)=> ({
  color: state.color
});

export default connect(mapStateToProps, actionsCreators)(Box);
