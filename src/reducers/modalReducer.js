
import * as c from '../actions/aConstants'

const modalReducer = (state = '', action) => {
  switch (action.type) {
    case c.SELECT_MODAL:
      return action.id
    default:
      return state
  }
}

export default modalReducer