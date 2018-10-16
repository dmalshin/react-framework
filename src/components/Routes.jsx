import React from 'react'
import { Fragment } from 'redux-little-router'
import { Demo } from '@ern/ui-components/src/demo'
import { ModuleName } from './module-name'
import { ReduxFormContainer } from './redux-form'

export const Routes = () => (
  <Fragment forRoute="/">
    {/* prettier-ignore */}
    <React.Fragment>
      <Fragment forRoute="/"><ModuleName /></Fragment>
      <Fragment forRoute="/ui-components"><Demo /></Fragment>
      <Fragment forRoute="/form"><ReduxFormContainer /></Fragment>
    </React.Fragment>
  </Fragment>
)
