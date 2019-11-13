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

  return <div className={cx(cellClass, 'spanCenter')}><span>{value}</span></div>
}

const KpiTable = props => {
  const [tableData, setTableData] = useState({ posts: kpiTableData })

  const columns = [
    {
      Header: 'Project Name',
      accessor: 'project_name',
      style: {
        textAlign: 'left',
      },
      width: 500,
    },
    {
      Header: 'Start Date',
      accessor: 'start_date',
      style: {
        textAlign: 'right',
      },
      width: 100,
    },
    {
      Header: 'Completed Date',
      accessor: 'completed_date',
      sortable: false,
      filterable: false,
      style: {
        textAlign: 'right',
      },
      width: 150,
    },
    {
      Header: 'Contract Amount',
      accessor: 'contract_amount',
      sortable: false,
      filterable: false,
      style: {
        textAlign: 'right',
      },
      width: 150,
    },
    {
      Header: 'Profit Percent',
      className: 'profitPercent',
      accessor: 'profit_percent',
      sortable: false,
      filterable: false,
      style: {
        textAlign: 'right',
      },
      width: 150,
      Cell: PercentCell,
    },
    {
      Header: 'Billed Percent',
      className: 'billedPercent',
      accessor: 'billed_percent',
      sortable: false,
      filterable: false,
      style: {
        textAlign: 'right',
      },
      width: 150,
      Cell: PercentCell,
    },
    {
      Header: 'Billed Spent Percent',
      className: 'billedSpentPercent',
      accessor: 'billed_spent_percent',
      sortable: false,
      filterable: false,
      style: {
        textAlign: 'right',
      },
      width: 160,
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
