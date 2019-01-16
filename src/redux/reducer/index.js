import * as actionTypes from '../action-types'

const defaultState = {
  index: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INDEX:
    return {
      ...state,
      index: action.index
    }
    default:
    return {
      ...state
    }
  }
}