import React, { useEffect } from "react"
import { graphql } from "gatsby"
import PostDescription from "../components/PostDescription/PostDescription"
import Layout from "../components/layout"
import "./styles/blog.scss"
import { Link } from "gatsby"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges, group },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <PostDescription
        key={edge.node.id}
        post={edge.node}
        postDescriptionImage={edge.node.frontmatter.childImageSharp}
        // postDescriptionImage={defaultImage}
      />
    ))
  useEffect(() => {
    console.log(edges[0].node.frontmatter.imageSrc)
  }, [])
  const Tags = group.map(tag => (
    <span className="tag-link" key={tag.tag}>
      [<Link to={`tags/${tag.tag}`}>{tag.tag}</Link>]
    </span>
  ))

  return (
    <Layout>
      <div className="blog-wrapper">
        <div className="blog__posts">{Posts}</div>
        <div className="blog__sidebar">
          <p>
            Здесь обо всем, что мне интересно и в чем мне бы хотелось
            разобраться.
          </p>
          ТЭГИ
          <p>{Tags}</p>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
