import './styles/App.scss'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ComponentError } from '@ern/ui-components'
import { AppHeader } from './AppHeader'
import { Routes } from '../Routes'

export const App = () => (
  <div className="app">
    <AppHeader />
    <ErrorBoundary FallbackComponent={ComponentError}>
      <Routes />
    </ErrorBoundary>
  </div>
)
