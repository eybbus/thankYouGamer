import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import soundThankYou from "../assets/throwUp_thankYouGamer.wav"
import AudioContainer from "../components/audioContainer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <p style={{ textAlign: `center` }}>
        A lot of elements on this page are clickable and produce sound
      </p>
      <AudioContainer
        sound={soundThankYou}
        playOnClick
        styles={{
          cursor: `pointer`,
          maxWidth: `75%`,
          marginLeft: `auto`,
          marginRight: `auto`,
          marginBottom: `1.45rem`,
        }}
      >
        <Image />
      </AudioContainer>
    </Layout>
  )
}

export default IndexPage
