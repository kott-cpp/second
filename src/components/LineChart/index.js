import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

import customData from '../../../goals_over_time.json'
console.log(customData)

// const moment = require('moment');

const strData = customData.STR.chart_data
const strTitle = customData.STR.chart_title
const actualColor = customData.STR.chart_styles[0].color
const goalColor = customData.STR.chart_styles[1].color

const actualLabels = []
const actualData = []
const goalData = []
// console.log('moment', moment().format('MMM YYYY'))
for (let i = 0; i < strData.length; i++) {
  actualLabels.push(strData[i][0])
  actualData.push(strData[i][1])
  goalData.push(strData[i][2])
}

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: actualLabels,
        datasets: [
          {
            label: 'Actual',
            data: actualData,

            fill: 'false',
            borderColor: actualColor,
            backgroundColor: actualColor,
            lineTension: 0,
          },
          {
            label: 'Goal',
            data: goalData,
            fill: 'false,',
            borderColor: goalColor,
            backgroundColor: goalColor,
            lineTension: 0,
          },
        ],
      },
    }
  }

  render() {
    return (
      <div className={'chart'}>
        <Line
          data={this.state.chartData}
          width={300}
          height={150}
          options={{
            title: {
              display: 'true',
              // text: 'Structural Goals Over Time',
              text: strTitle,
              fontSize: 20,
            },
            tooltips: {
              mode: 'index',
              intersect: false,
              backgroundColor: 'white',
              bodyFontColor: 'black',
              borderColor: 'gray',
              borderWidth: 1,
              titleFontColor: 'black',
            },
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                fontSize: 16,
                height: 3,
              },
            },
            scales: {
              xAxes: [
                {
                  type: 'time',
                  time: {
                    unit: 'month',
                    displayFormats: {
                      month: 'MMM YYYY',
                    },
                  },
                },
              ],
              yAxes: [
                {
                  scaleLabel: {
                    display: 'true',
                    labelString: 'USD',
                    fontSize: 20,
                  },
                  ticks: {
                    beginAtZero: true,
                    stepSize: 200000,
                    callback: function(value, index, values) {
                      if (parseInt(value) >= 1000) {
                        return (
                          '$' +
                          value
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                          '.00'
                        )
                      } else {
                        return '$' + value + '.00'
                      }
                    },
                  },
                },
              ],
            },
          }}
        />
      </div>
    )
  }
}

export default LineChart
