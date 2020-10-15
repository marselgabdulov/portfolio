import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SharePost from "../components/SharePost/SharePost"
import "./blogTemplate.scss"
import { Link } from "gatsby"

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
          <h2>{frontmatter.subTitle}</h2>
          <p>
            {frontmatter.tags.map(tag => (
              <Link key={tag} to={`https://marsdev.ru/${tag}`}>
                #{tag}
              </Link>
            ))}
          </p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <h4 className="blog-post__date">{frontmatter.date}</h4>
        {frontmatter.prevPostName && (
          <p>
            Предыдущая статья{" "}
            <Link to={frontmatter.prevPostLink}>
              {frontmatter.prevPostName}
            </Link>
          </p>
        )}
        {frontmatter.nextPostName && (
          <p>
            Следующая статья{" "}
            <Link to={frontmatter.nextPostLink}>
              {frontmatter.nextPostName}
            </Link>
          </p>
        )}
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
        subTitle
        tags
        prevPostName
        nextPostName
        prevPostLink
        nextPostLink
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAuthor
        imageAuthorLink
      }
    }
  }
`
