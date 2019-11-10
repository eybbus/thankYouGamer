import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/about.scss"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About page" />
      <h1>What is this?</h1>
      <p>
        As a fan of mandalore and shammy, I bought a dumb domain as a joke that
        is based on a inside joke between mandalore and shammy, which became a
        focal point in history for all gamers and Lowry cultists.
      </p>
      <h2>Why?</h2>
      <p>My brain demanded it!</p>
      <h2>Who am I?</h2>
      <p>A lost druid</p>
      <h2>What is "Lowry"?</h2>
      <p>
        A scissor owning ladies man. (you can find the lowry community "hidden"
        in the shammy discord server, shhhh)
      </p>
    </Layout>
  )
}

export default AboutPage
