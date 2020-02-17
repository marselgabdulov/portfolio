import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SharePost from "../components/SharePost/SharePost"
import "./blogTemplate.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          {frontmatter.imageSrc && (
            <div
              className="blog-post__image"
              style={{ backgroundImage: `url(${frontmatter.imageSrc})` }}
            ></div>
          )}
          <p className="blog-post__image-author">
            Фото{" "}
            <a
              href={frontmatter.imageAuthorLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {frontmatter.imageAuthor}
            </a>
          </p>

          <p>{frontmatter.tags}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <h4>{frontmatter.date}</h4>
        <SharePost postLink={frontmatter.path} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        path
        title
        tags
        imageSrc
        imageAuthor
        imageAuthorLink
      }
    }
  }
`
