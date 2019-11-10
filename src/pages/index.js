import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import sound from "../assets/throwUp_thankYouGamer.wav"

const IndexPage = () => {
  let audio = new Audio(sound)
  audio.autoplay = true

  return (
    <Layout>
      <SEO title="Home" />
      <div
        onMouseEnter={() => audio.play()}
        style={{
          maxWidth: `75%`,
          marginLeft: `auto`,
          marginRight: `auto`,
          marginBottom: `1.45rem`,
        }}
      >
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
