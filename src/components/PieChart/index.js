import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

class PieChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charData: {
        labels: ['AQ', 'STR', 'SOL', 'AU'],
        datasets: [
          {
            data: [3578275, 4586177, 2470481, 1913347],
            backgroundColor: ['#C0504D', '#71588F', '#FFFF00', '#DB843D'],
          },
        ],
      },
    }
  }

  render() {
    return (
      <div className={'chart'}>
        <Pie
          data={this.state.charData}
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
              text: 'Contracts YTD by Profit Center',
              fontSize: 20,
            },
          }}
        />
      </div>

    )
  }
}

export default PieChart
