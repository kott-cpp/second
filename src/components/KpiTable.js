import React, { useState } from 'react'
import ReactTable from 'react-table'
import cx from 'classnames'
import kpiTable from './kpiTable.css'
import 'react-table/react-table.css'
import kpiTableData from '../kpi_table.json'
import '../styles/styles.css'

const PercentCell = props => {
  const percentColor = {
    profit_percent: 'spent_chart_class',
    billed_percent: 'billed_chart_class',
    billed_spent_percent: 'billed_spent_chart_class',
  }
  console.log('props', props)

  const id = props.column['id'] //profit percent
  const chartClass = percentColor[id] //'spent_chart_class'
  const value = props.original[id] //67.8
  const cellClass = props.original[chartClass] //'chartGood'

  return <span className={cx(cellClass, 'spanCenter')}>{value}</span>
}

const KpiTable = props => {
  const [tableData, setTableData] = useState({ posts: kpiTableData })

  const columns = [
    {
      Header: 'Project Name',
      accessor: 'project_name',
    },
    {
      Header: 'Start Date',
      accessor: 'start_date',
    },
    {
      Header: 'Completed Date',
      accessor: 'completed_date',
    },
    {
      Header: 'Contract Amount',
      accessor: 'contract_amount',
    },
    {
      Header: 'Profit Percent',
      accessor: 'profit_percent',
      Cell: PercentCell,
    },
    {
      Header: 'Billed Percent',
      accessor: 'billed_percent',
      Cell: PercentCell,
    },
    {
      Header: 'Billed Spent Percent',
      accessor: 'billed_spent_percent',
      Cell: PercentCell,
    },
  ]

  return (
    <ReactTable
      columns={columns}
      data={tableData.posts}
      filterable
      defaultPageSize={20}
      noDataText={'Please Wait...'}
      className={'dither'}
    />
  )
}

export default KpiTable
