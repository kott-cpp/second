import React from 'react'
import LineChartStory from './LineChart'
import {storiesOf} from '@storybook/react'

const lineChartStory = storiesOf('LineChart')

lineChartStory.add('Default', () => <LineChartStory />)