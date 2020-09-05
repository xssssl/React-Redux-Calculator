import React from 'react'
import { connect } from 'react-redux'

const DisplayPanel = (props) => {
  const { currentValue, formula } = props
  return (
    <div id='screen'>
      <span id='formula'>{formula}</span>
      <span id='display'>{currentValue}</span>
    </div>
    )
}

const ConnectedDisplayPanel = connect(state => state, null)(DisplayPanel)
export default ConnectedDisplayPanel