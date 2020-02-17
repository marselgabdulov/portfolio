import React from "react"
import { Link } from "gatsby"
import "./PostDescription.scss"
import Img from "gatsby-image"

function Postdescription({ post }) {
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <div className="post-description">
      <Link to={post.frontmatter.path}>
        <Img fluid={featuredImgFluid} className="post__image" />
      </Link>
      <h3 className="post__title">
        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
      </h3>
      <p className="post__date">{post.frontmatter.date}</p>
    </div>
  )
}

export default Postdescription
