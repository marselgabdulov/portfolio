import React from "react"
import "./ProjectCard.scss"
import { Link } from "gatsby"
import { connect } from "react-redux"

function ProjectCard({
  reverse,
  image,
  link,
  name,
  description,
  githubLink,
  tools,
}) {
  return (
    <div className={reverse ? "project-card reverse" : "project-card"}>
      <div className="project-card__info">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__name"
        >
          {name}
        </a>
        <span className="project-card__description">{description}</span>
        <span className="project-card__tools">{tools}</span>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__name"
          >
            Github
          </a>
        )}
      </div>
      <Link
        to={link}
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
