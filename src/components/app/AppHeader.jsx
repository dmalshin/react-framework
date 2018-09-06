import React from 'react'
import { Link } from 'react-router-dom'

export const AppHeader = () => (
  <header>
    <Link to="/">Home</Link>
    <br />
    <Link to="/form">Form</Link>
    <br />
    <Link to="/test">Test</Link>
  </header>
)
