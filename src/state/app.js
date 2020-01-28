// initial state
const initialState = {
  isNavPannelOpened: false,
  isEnglish: false,
}

// action creator
const TOOGLE_NAVPANNEL = "TOGGLE_NAVPANNEL"
const TOOGLE_LANGUAGE = "TOGGLE_LANGUAGE"

export const toggleNavPannel = isNavPannelOpened => ({
  type: TOOGLE_NAVPANNEL,
  isNavPannelOpened,
})

export const toggleLanguage = isEnglish => ({
  type: TOOGLE_LANGUAGE,
  isEnglish,
})

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_NAVPANNEL:
      return { ...state, isNavPannelOpened: action.isNavPannelOpened }
    case TOOGLE_LANGUAGE:
      return { ...state, isEnglish: action.isEnglish }
    default:
      return state
  }
}
