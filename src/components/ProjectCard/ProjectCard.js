import React from "react"
import "./ProjectCard.scss"
import { Link } from "gatsby"

function ProjectCard({ reverse, image, innerLink, role, outerLink, name }) {
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
        <span className="project-card__role">{role}</span>
        <Link to={innerLink} className="button">
          Подробнее
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

export default ProjectCard
