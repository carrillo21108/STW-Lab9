import './Display.scss'
import React from 'react'

export default function Display(props) {
  return (
    <div className="component-display">
      <div>{props.value}</div>
    </div>
  )
}
