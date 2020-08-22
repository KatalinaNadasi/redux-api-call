let defaultState = {
  color: ""
}

const color=( state=defaultState, action)=> {
  if( action.type === "CHANGE_COLOR" ) {
    return {
      ...state,
      color: action.color
    }
  } else {
    return {
      ...state
    }
  }
}

export default color;
