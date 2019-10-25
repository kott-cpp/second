import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: [
          'Nov 2018',
          'Jan 2019',
          'Mar 2019',
          'May 2019',
          'Jul 2019',
          'Sep 2019',
        ],
        datasets: [
          {
            label: 'Actual',
            data: [428185, 359825, 505841, 449479],
            fill: 'false',
            borderColor: 'green',
            lineTension: 0,
          },
          {
            label: 'Goal',
            data: [346341, 317528, 309884, 3806],
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
            }
          }}
        />
      </div>
    )
  }
}

export default LineChart
