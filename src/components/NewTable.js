import React, { Component } from 'react'
import ReactTable from 'react-table'
import newTable from './newTable.css'
import 'react-table/react-table.css'
import ExportToExcel from './ExportToExcel'

class NewTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
      method: 'Get',
    })
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts })
      })
  }

  deleteRow(id) {
    const index = this.state.posts.findIndex(post => {
      return post.id === id
    })
  }

  render() {
    const columns = [
      {
        Header: 'User ID',
        accessor: 'userId',
        style: {
          textAlign: 'right',
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100,
      },
      {
        Header: 'ID',
        accessor: 'id',
        style: {
          textAlign: 'right',
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100,
      },
      {
        Header: 'Title',
        accessor: 'title',
        sortable: false,
        filterable: false,
      },
      {
        Header: 'Content',
        accessor: 'body',
        sortable: false,
        filterable: false,

      },
      {
        Header: 'Actions',
        Cell: props => {
          return (
            <button
              style={{ backgroundColor: 'red', color: '#fefefe' }}
              onClick={() => {
                this.deleteRow(props.original.id)
              }}
            >
              Delete
            </button>
          )
        },
        sortable: false,
        filterable: false,
        width: 100,
        maxWidth: 100,
        minWidth: 100,
      },
    ]

    return (
      <ReactTable
        columns={columns}
        data={this.state.posts}
        filterable
        defaultPageSize={5}
        noDataText={'Please Wait...'}
        // showPaginationTop
        // showPaginationBottom={false}
        // showPagination={false}
      >
        {(state, filteredData, instance) => {
          this.reactTable = state.pageRows.map(post => {
            return post._original
          });
          return (
            <div>
              {filteredData()}
              <ExportToExcel posts={this.reactTable} />
            </div>
          )
        }}
      </ReactTable>
    )
  }
}

export default NewTable
