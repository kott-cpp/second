import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

const key1 = 'stack1'

class StackedChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            stack: key1,
            label: 'AQ',
            data: [985150, 892546, 1403729, 296850],
            backgroundColor: '#C0504D',
          },
          {
            stack: key1,
            label: 'STR',
            data: [1482364, 1163528, 1688944, 248340],
            backgroundColor: '#71588F',
          },
          {
            stack: key1,
            label: 'SOL',
            data: [728244, 499475, 1073875, 168886],
            backgroundColor: '#FFFF00',
          },
          {
            stack: key1,
            label: 'AU',
            data: [367902, 745634, 586237, 213577],
            backgroundColor: '#DB843D',
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
          options={{
            legend: {
              position: 'right',
              reverse: 'true',
              labels: {
                boxWidth: 40,
              },
            },
            title: {
              display: 'true',
              text: 'Quarterly Sales Goals',
              fontSize: 20,
            },
            // Just add a comma to the scales
            /*scales: {
              yAxes: [
                {
                  ticks: {
                    callback(value) {
                      return Number(value).toLocaleString('en')
                    },
                  },
                },
              ],
            },*/

            // Adds a dollar sign and commas to scales
            scales: {
              title: {
                display: 'true',
                text: 'USD',
                fontSize: 20,
                position: 'left',
              },
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                      if (parseInt(value) >= 1000) {
                        return (
                          '$' +
                          value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        )
                      } else {
                        return '$' + value
                      }
                    },
                  },
                },
              ],
            },
            //Using Chart.js With React 8:52 / 23:41
          }}
        />
      </div>
    )
  }
}

export default StackedChart
