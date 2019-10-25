import React from 'react'
import StackedChartStory from './StackedChart'
import {storiesOf} from '@storybook/react'

const stackedChartStory = storiesOf('StackedChart')

stackedChartStory.add('Default', () => <StackedChartStory />)