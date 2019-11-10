import React from "react"

const AudioContainer = props => {
  const { sound, playOnClick, playOnEnter, endOnLeave } = props
  let audio = new Audio(sound)

  if (playOnClick) {
    return <div onClick={() => audio.play()}>{props.children}</div>
  } else if (playOnEnter) {
    return <div onMouseEnter={() => audio.play()}>{props.children}</div>
  } else if (endOnLeave) {
    return (
      <div
        onMouseEnter={() => audio.play()}
        onMouseLeave={() => {
          audio.pause()
          audio.currentTime = 0
        }}
      >
        {props.children}
      </div>
    )
  } else {
    return <div onMouseEnter={() => audio.play()}>{props.children}</div>
  }
}

export default AudioContainer
