import React from "react"
import { graphql } from "gatsby"
import PostDescription from "../components/PostDescription/PostDescription"
import Layout from "../components/layout"
import BlogSidebar from "../components/BlogSidebar/BlogSidebar"
import "./styles/blog.scss"
import SEO from "../components/seo"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <PostDescription
        key={edge.node.id}
        post={edge.node}
        postDescriptionImage={edge.node.frontmatter.childImageSharp}
      />
    ))
  return (
    <Layout>
      <SEO title="Блог" />
      <div className="blog-wrapper">
        <div className="blog__posts">
          <h1>Все статьи</h1>
          {Posts}
        </div>
        <BlogSidebar />
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            path
            title
            subTitle
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
