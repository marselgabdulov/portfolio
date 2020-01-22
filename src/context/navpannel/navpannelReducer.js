import { OPEN_NAVPANNEL, CLOSE_NAVPANNEL } from "../types"

export default (state, action) => {
  switch (action.type) {
    case OPEN_NAVPANNEL:
    case CLOSE_NAVPANNEL:
      return {
        navpannel: action.payload,
      }
    default:
      return state
  }
}
