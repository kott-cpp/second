import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import pieChartData from '../../../ytd_contract.json'
console.log('PieChartData', pieChartData)

const chartData = pieChartData.chart_data
const chartBColor = pieChartData.chart_styles
const chartTColor = chartBColor[3]['textStyle']['color']
console.log('Chart Tcolor', chartTColor)
const pieLabels = []
const pieData = []
const pieBColor = []
const pieTColor = []

for (let i = 0; i < chartBColor.length; i++) {
  pieBColor.push(chartBColor[i]['color'])
  // pieTColor.push(chartBColor[i][1]['color'])

}

for (let i = 0; i < pieChartData.chart_data.length; i++) {
  pieLabels.push(chartData[i][0])
  pieData.push(chartData[i][1])
}

class PieChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charData: {
        labels: pieLabels,
        datasets: [
          {
            data: pieData,
            backgroundColor: pieBColor,
            series: 'hello',
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
