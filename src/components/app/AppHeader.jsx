import React from 'react'
import { Link } from 'react-router-dom'

export const AppHeader = () => (
  <header>
    <Link to="/">home</Link>
    <br />
    <Link to="/ui-components">ui-components demo</Link>
    <br />
    <Link to="/form">form example</Link>
    <br />
  </header>
)
