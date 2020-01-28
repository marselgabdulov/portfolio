import React from "react"
import "./LangButton.scss"
import { connect } from "react-redux"
import { toggleLanguage } from "../../state/app"

function LangButton({ isEnglish, dispatch }) {
  return (
    <button
      className="lang-button"
      onClick={() => dispatch(toggleLanguage(!isEnglish))}
    >
      {isEnglish ? "RU" : "EN"}
    </button>
  )
}

export default connect(
  state => ({ isEnglish: state.app.isEnglish }),
  null
)(LangButton)
