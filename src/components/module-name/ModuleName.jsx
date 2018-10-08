import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItemsStart } from '../../store/actions/itemsActions'
import { getItems } from '../../store/reducers/itemsReducer'

class ModuleNameComponent extends Component {
  componentDidMount() {
    this.props.fetchItemsStart()
  }

  render() {
    const { items } = this.props
    return (
      <ul>
        {items.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    )
  }
}

export const ModuleName = connect(
  (state) => ({
    items: getItems(state),
  }),
  { fetchItemsStart }
)(ModuleNameComponent)
