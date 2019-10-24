import React from 'react'
import StackedChartStory from './StackedChart'
import {storiesOf} from '@storybook/react'

const chartStory = storiesOf('StackedChart')

chartStory.add('Default', () => <StackedChartStory />)