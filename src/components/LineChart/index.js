import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

import customData from '../../../goals_over_time.json'
console.log(customData)

const actualLabels = []

for (let i = 0; i < customData.STR.chart_data.length; i++) {
  actualLabels.push(customData.STR.chart_data[i][0])
}

const actualData = []

for (let i = 0; i < customData.STR.chart_data.length; i++) {
  actualData.push(customData.STR.chart_data[i][1])
}

const goalData = []

for (let i = 0; i < customData.STR.chart_data.length; i++) {
  goalData.push(customData.STR.chart_data[i][2])
}

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: [...actualLabels],
        datasets: [
          {
            label: 'Actual',
            data: [...actualData],
            fill: 'false',
            borderColor: 'green',
            lineTension: 0,
          },
          {
            label: 'Goal',
            data: [...goalData],
            fill: 'false,',
            borderColor: 'black',
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
              text: 'Structural Goals Over Time',
              fontSize: 20,
            },
          }}
        />
      </div>
    )
  }
}

export default LineChart
