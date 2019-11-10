import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import soundThankYou from "../assets/throwUp_thankYouGamer.wav"
import AudioContainer from "../components/AudioContainer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <AudioContainer sound={soundThankYou}>
        <div
          style={{
            maxWidth: `75%`,
            marginLeft: `auto`,
            marginRight: `auto`,
            marginBottom: `1.45rem`,
          }}
        >
          <Image />
        </div>
      </AudioContainer>
    </Layout>
  )
}

export default IndexPage
