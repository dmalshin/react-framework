import React from 'react'
import { Link } from 'react-router-dom'

export const AppHeader = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/test">Test</Link>
  </header>
)
