import React from "react"
import Layout from "../components/layout"
import "./styles/contacts.scss"
import SEO from "../components/seo"

function ContactsPage() {
  return (
    <Layout>
      <SEO title="Контакты" />
      <section className="contacts-page">
        <h2>Контакты</h2>
      </section>
    </Layout>
  )
}

export default ContactsPage
