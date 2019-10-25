import React from 'react'
import PieChartStory from './PieChart'
import {storiesOf} from '@storybook/react'

const pieChartStory = storiesOf('PieChart')

pieChartStory.add('Default', () => <PieChartStory />)