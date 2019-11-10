import React from "react"

class AudioContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      audio: null,
    }
  }

  componentDidMount() {
    this.setState({ audio: new Audio(this.props.sound) })
  }

  render() {
    const { playOnClick, playOnEnter, endOnLeave } = this.props
    const { audio } = this.state

    if (playOnClick) {
      return <div onClick={() => audio.play()}>{this.props.children}</div>
    } else if (playOnEnter) {
      return <div onMouseEnter={() => audio.play()}>{this.props.children}</div>
    } else if (endOnLeave) {
      return (
        <div
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
      return <div onMouseEnter={() => audio.play()}>{this.props.children}</div>
    }
  }
}

export default AudioContainer
