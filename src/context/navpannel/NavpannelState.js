import React, { useReducer } from "react"
import NavpannelContext from "./navpannelContext"
import navpannelReducer from "./navpannelReducer"

import { OPEN_NAVPANNEL, CLOSE_NAVPANNEL } from "../types"

const NavpannelState = props => {
  const initialState = {
    navpannel: false,
  }

  const [state, dispatch] = useReducer(navpannelReducer, initialState)

  // Open navpannel
  function openNavpannel() {
    dispatch({ type: OPEN_NAVPANNEL, payload: true })
  }

  // Remove Navpannel
  function closeNavpannel() {
    dispatch({ type: CLOSE_NAVPANNEL, payload: false })
  }

  return (
    <NavpannelContext.Provider
      value={{ navpannel: state.navpannel, openNavpannel, closeNavpannel }}
    >
      {props.children}
    </NavpannelContext.Provider>
  )
}

export default NavpannelState
