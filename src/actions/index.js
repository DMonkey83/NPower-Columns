import * as c from './aConstants'

export const selectModal = id => {
  return {
    type: c.SELECT_MODAL,
    id
  }
}