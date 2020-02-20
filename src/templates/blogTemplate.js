import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SharePost from "../components/SharePost/SharePost"
import "./blogTemplate.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid

  useEffect(() => {
    console.log(frontmatter.prevPostName)
  }, [])
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <Img fluid={featuredImgFluid} className="blog-post__image" />
          <h1>{frontmatter.title}</h1>
          <p className="blog-post__image-author">
            Фото &nbsp;
            <a
              href={frontmatter.imageAuthorLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {frontmatter.imageAuthor}
            </a>
          </p>
          <p>
            {frontmatter.tags.map(tag => (
              <Link key={tag} to={`https://marsdev.ru/${tag}`}>
                #{tag}
              </Link>
            ))}
          </p>
          <h2>{frontmatter.subTitle}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <h4>{frontmatter.date}</h4>
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
