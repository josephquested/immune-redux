import React from 'react'
import Row from './Row'

export default class Table extends React.Component {
  constructor(props) {
    super(props)
  }

  renderRows () {
    return Array(this.props.size).fill(<Row size={this.props.size}/>)
  }

  render () {
    return (
      <table>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}
