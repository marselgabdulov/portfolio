import React from "react"
import "./ProjectCard.scss"
import { Link } from "gatsby"

function ProjectCard({ reverse, image, innerLink, role, outerLink }) {
  return (
    <div className={reverse ? "project-card reverse" : "project-card"}>
      <div className="project-card__info">
        <a
          href={`https:/${outerLink}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__name"
        >
          {outerLink}
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
