import * as c from '../actions/aConstants'

import { products } from '../data'

const rootReducer = (state = products, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default rootReducer