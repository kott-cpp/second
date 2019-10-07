import React, { Component } from 'react'
import cx from 'classnames'
import { Bar, Line, Pie } from 'react-chartjs-2'

import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import Helmet from 'react-helmet'

const client = new ApolloClient({
  uri: 'https://api.graphcms.com/simple/v1/swapi',
})

client
  .query({
    query: gql`
      {
        Starship(name: "Millennium Falcon") {
          name
          hyperdriveRating
          pilots(orderBy: height_DESC) {
            name
            height
            homeworld {
              name
            }
            species {
              name
            }
            films {
              title
            }
          }
        }
      }
    `,
  })
  .then(result => console.log(result.data.Starship.pilots[0]))

class Chart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: [
          'Boston',
          'Worcester',
          'Springfield',
          'Lowell',
          'Cambridge',
          'New Bedford',
        ],
        datasets: [
          {
            label: 'Population',
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
          },
        ],
      },
    }
  }

  render() {
    return (
      <div className={'chart'}>
        <Bar
          data={this.state.chartData}
          width={500}
          height={225}
          options={
            {
              //Using Chart.js With React 8:52 / 23:41
            }
          }
        />
      </div>
    )
  }
}

export default Chart
