import React from "react"
import Layout from "../components/layout"
import "./styles/edu.scss"
import SEO from "../components/seo"

function EduPage() {
  return (
    <Layout>
      <SEO title="Учебные работы" />
      <section className="edu-page">
        <h2>Учебные работы</h2>
      </section>
    </Layout>
  )
}

export default EduPage
