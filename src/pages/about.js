import React from "react"
import Layout from "../components/layout"
import "./styles/about.scss"
import SEO from "../components/seo"

function AboutPage() {
  return (
    <Layout>
      <SEO title="Обо мне" />
      <section className="about-page">
        <h2>Обо мне</h2>
      </section>
    </Layout>
  )
}

export default AboutPage
