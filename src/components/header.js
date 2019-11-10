import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AudioContainer from "./AudioContainer"
import soundJoinUs from "../assets/Join_Us_Join_Us_Join_Us_Now.mp3"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `linear-gradient(0deg, rgba(48,170,73,1), rgba(106,205,12,1))`,
      marginBottom: `1.45rem`,
      borderBottom: `2px solid black`,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h4 style={{ margin: 0 }}>
        <Link to="/theGamers/">The Gamers</Link>
      </h4>
      <h4 style={{ margin: 0 }}>
        <Link to="/gamerMoments/">Gamer moments</Link>
      </h4>
      <h4 style={{ margin: 0 }}>
        <AudioContainer sound={soundJoinUs} playOnClick={true}>
          <Link to="/about/">What is this</Link>
        </AudioContainer>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
