import './styles/App.scss'
import React from 'react'
import { AppHeader } from './AppHeader'
import { AppRoutes } from '../routes/AppRoutes'

export const App = () => (
  <div className="app">
    <AppHeader />
    <AppRoutes />
  </div>
)
