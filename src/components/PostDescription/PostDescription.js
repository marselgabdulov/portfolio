import React from "react"
import { Link } from "gatsby"
import "./PostDescription.scss"

function Postdescription({ post }) {
  return (
    <div className="post-description">
      <div className="post__title">
        <h3>
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
        </h3>
        <h4>{post.frontmatter.subTitle}</h4>
      </div>
      <p className="post__date">{post.frontmatter.date}</p>
    </div>
  )
}

export default Postdescription
