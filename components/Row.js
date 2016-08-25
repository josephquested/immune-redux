import React from 'react'
import Cell from './Cell'

export default class Row extends React.Component {
  constructor(props) {
    super(props)
  }

  renderCells () {
    return Array(this.props.size).fill(<Cell />)
  }

  render () {
    return (
      <tr>
        {this.renderCells()}
      </tr>
    )
  }
}
