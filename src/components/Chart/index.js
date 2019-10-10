import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: [
          'Chewbacca',
          'Han Solo',
          'Lando Calrissian',
          'Nien Nunb',
          'Rey',
        ],
        datasets: [
          {
            label: 'Height in cm',
            data: [228, 180, 177, 160, 150],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
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
          width={300}
          height={150}
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
