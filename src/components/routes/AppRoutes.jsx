import React from 'react'
import { Route } from 'react-router-dom'
import * as routes from '.'

export const AppRoutes = () => (
  <React.Fragment>
    <Route exact path="/" component={routes.HomeRoute} />
    <Route path="/ui-components" component={routes.UIComponentsRoute} />
    <Route path="/form" component={routes.FormRoute} />
  </React.Fragment>
)
