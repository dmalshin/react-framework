/* eslint-disable */
import React, { Component } from 'react'
import { getItems } from '../../api'

export class ModuleName extends Component {
  componentDidMount() {
    getItems().then(
      (response) => console.log(response),
      (error) => console.dir(error)
    )
  }

  render() {
    return <React.Fragment>Шаблон приложения успешно стартовал</React.Fragment>
  }
}
