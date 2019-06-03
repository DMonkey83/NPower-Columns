
import { combineReducers } from 'redux'
import modalReducer from './modalReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
  products: productReducer,
  selected: modalReducer
})

export default rootReducer
