// initial state
const initialState = {
  isNavPannelOpened: false,
}

// action creator
const TOOGLE_NAVPANNEL = "TOGGLE_NAVPANNEL"

export const toggleNavPannel = isNavPannelOpened => ({
  type: TOOGLE_NAVPANNEL,
  isNavPannelOpened,
})

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_NAVPANNEL:
      return { ...state, isNavPannelOpened: action.isNavPannelOpened }
    default:
      return state
  }
}
