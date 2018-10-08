import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Route } from 'react-router-dom'
import * as routes from '.'

export const AppRoutes = () => (
  // можно использовать ComponentError из ui-components
  // <ErrorBoundary FallbackComponent={ComponentError}>
  <ErrorBoundary>
    <Route exact path="/" component={routes.HomeRoute} />
    <Route path="/ui-components" component={routes.UIComponentsRoute} />
    <Route path="/form" component={routes.FormRoute} />
  </ErrorBoundary>
)
