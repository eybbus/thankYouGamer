import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"
import AudioContainer from "./audioContainer"
import soundReload from "../assets/reload.wav"
import soundJoinUs from "../assets/Join_Us_Join_Us_Join_Us_Now.mp3"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-container">
      <div className="logo">
        <AudioContainer sound={soundReload} playOnClick={true}></AudioContainer>
        <Link to="/">{siteTitle}</Link>
        <AudioContainer sound={soundReload} playOnClick={true}></AudioContainer>
      </div>
      <nav>
        <Link to="/theGamers/">The Gamers</Link>
        <Link to="/gamerMoments/">Gamer moments</Link>
        <AudioContainer sound={soundJoinUs} playOnClick={true}>
          <Link to="/about/">What is this</Link>
        </AudioContainer>
      </nav>
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
