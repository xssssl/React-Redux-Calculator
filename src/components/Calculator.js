import React from 'react'
import Logo from './Logo'
import SolarPanel from './SolarPanel'
import ConnectedDisplayPanel from './DisplayPanel'
import ConnectedKeyBoard from './KeyBoard'

export const Calculator = (props) => (
  <div id="calcmain">
    <Logo />
    <SolarPanel />
    <ConnectedDisplayPanel />
    <ConnectedKeyBoard />
  </div>
);