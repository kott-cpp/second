import React from 'react'
import LineChartAQStory from './LineChartAQ'
import { storiesOf } from '@storybook/react'

const lineChartAQStory = storiesOf('LineChartAQ')

lineChartAQStory.add('Default', () => <LineChartAQStory />)
