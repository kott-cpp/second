import cx from 'classnames'
import React from 'react'
import './styles.css'
import Table from '../../../src/components/Table'

const TableStory = () => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Height</th>
        <th>Planet</th>
      </tr>
    </thead>
    <Table />
  </table>
)

export default TableStory
