import React, { Component } from "react"

class AudioContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audio: null,
    }
  }

  componentDidMount() {
    let audio = new Audio(this.props.sound)
    audio.volume = 0.35
    this.setState({ audio: audio })
  }

  render() {
    const { playOnClick, playOnEnter, endOnLeave, styles } = this.props
    const { audio } = this.state

    if (playOnClick) {
      return (
        <div style={styles} onClick={() => audio.play()}>
          {this.props.children}
        </div>
      )
    } else if (playOnEnter) {
      return (
        <div style={styles} onMouseEnter={() => audio.play()}>
          {this.props.children}
        </div>
      )
    } else if (endOnLeave) {
      return (
        <div
          style={styles}
          onMouseEnter={() => audio.play()}
          onMouseLeave={() => {
            audio.pause()
            audio.currentTime = 0
          }}
        >
          {this.props.children}
        </div>
      )
    } else {
      return (
        <div style={styles} onMouseEnter={() => audio.play()}>
          {this.props.children}
        </div>
      )
    }
  }
}

export default AudioContainer
