import React, { useState } from 'react'
import ReactTable from 'react-table'
import newTable from './newTable.css'
import 'react-table/react-table.css'
import ExportToExcel from './ExportToExcel'
import kpiTableData from '../kpi_table.json'
import '../styles/styles.css'
console.log(kpiTableData)

const PercentCell = props => {
  const percentColor = {
    profit_percent: 'spent_chart_class',
    billed_percent: 'billed_chart_class',
    billed_spent_percent: 'billed_spent_chart_class',
  }
  console.log('props_id', props)

  const id = props.column['id'] //profit_percent
  const chartClass = percentColor[id] //'spent_chart_class'
  const value = props.original[id] //67.8
  const rowClass = props.original[chartClass] //'chartGood'

  return (
    <span className={rowClass}>
      {value}
    </span>
  )
}

const NewTable = props => {
  const [tableData, setTableData] = useState({ posts: kpiTableData })

  let reactTable

  const columns = [
    {
      Header: 'Project Name',
      accessor: 'project_name',
      style: {
        textAlign: 'left',
      },
      width: 500,
      maxWidth: 500,
      minWidth: 500,
    },
    {
      Header: 'Start Date',
      accessor: 'start_date',
      style: {
        textAlign: 'right',
      },
      width: 100,
      maxWidth: 100,
      minWidth: 100,
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
      accessor: 'profit_percent',
      sortable: false,
      filterable: false,
      Cell: PercentCell,
      style: {
        textAlign: 'center',
      },
      width: 150,
    },
    {
      Header: 'Billed Percent',
      accessor: 'billed_percent',
      sortable: false,
      filterable: false,
      Cell: PercentCell,
      style: {
        textAlign: 'center',
      },
      width: 150,
    },
    {
      Header: 'Billed/Spent Percent',
      accessor: 'billed_spent_percent',
      sortable: false,
      filterable: false,
      Cell: PercentCell,
      style: {
        textAlign: 'center',
      },
      width: 150,
    },
  ]

  return (
    <ReactTable
      columns={columns}
      data={tableData.posts}
      filterable
      // pageSizeOptions={[7, 13 ,42]}
      defaultPageSize={20}
      noDataText={'Please Wait...'}
      className={'dither'}
      // showPaginationTop
      // showPaginationBottom={false}
      // showPagination={false}
    >
      {(state, filteredData, instance) => {
        reactTable = state.pageRows.map(post => {
          return post._original
        })
        return (
          <div>
            {filteredData()}
            <ExportToExcel posts={reactTable} />
          </div>
        )
      }}
    </ReactTable>
  )
}

export default NewTable
