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
        <h3 className="post__title">{post.frontmatter.title}</h3>
      </Link>

      <div
        className="post__image"
        style={{
          backgroundImage: `url(${postDescriptionImage.childImageSharp.fluid.src})`,
        }}
      ></div>
      <p className="post__date">{post.frontmatter.date}</p>
    </div>
  )
}

export default Postdescription
