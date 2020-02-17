import React, { useEffect } from "react"
import { Link } from "gatsby"
import "./PostDescription.scss"

function Postdescription({ post, postDescriptionImage }) {
  useEffect(() => {
    console.log(postDescriptionImage)
  }, [])
  return (
    <div className="post-description">
      <Link to={post.frontmatter.path}>
        <div
          className="post__image"
          style={{
            backgroundImage: `url(${postDescriptionImage.childImageSharp.fluid.src})`,
          }}
        ></div>
      </Link>
      <h3 className="post__title">
        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
      </h3>
      <p className="post__date">{post.frontmatter.date}</p>
    </div>
  )
}

export default Postdescription
