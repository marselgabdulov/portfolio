import React from "react"
import "./ProjectCard.scss"
import { Link } from "gatsby"
import { connect } from "react-redux"

function ProjectCard({
  reverse,
  image,
  innerLink,
  outerLink,
  name,
  isEnglish,
}) {
  return (
    <div className={reverse ? "project-card reverse" : "project-card"}>
      <div className="project-card__info">
        <a
          href={outerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__name"
        >
          {name}
        </a>
        <Link to={innerLink} className="button">
          {isEnglish ? "details" : "Подробнее"}
        </Link>
      </div>
      <Link
        to={innerLink}
        className="project-card__image"
        style={{ backgroundImage: `url(${image})` }}
      ></Link>
    </div>
  )
}

export default connect(
  state => ({
    isEnglish: state.app.isEnglish,
  }),
  null
)(ProjectCard)
