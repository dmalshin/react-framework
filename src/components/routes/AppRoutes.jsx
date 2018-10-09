import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Route, Switch } from 'react-router-dom'
import * as routes from '.'

export const AppRoutes = () => (
  // можно использовать ComponentError из ui-components
  // <ErrorBoundary FallbackComponent={ComponentError}>
  <ErrorBoundary>
    <Switch>
      <Route exact path="/" component={routes.HomeRoute} />
      <Route path="/ui-components" component={routes.UIComponentsRoute} />
      <Route path="/form" component={routes.FormRoute} />
    </Switch>
  </ErrorBoundary>
)
