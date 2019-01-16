import * as actionTypes from '../action-types'

export function changeIndex (index) {
  return {
    type: actionTypes.CHANGE_INDEX,
    index
  }
}
