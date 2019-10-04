import React from 'react'
import ChartStory from './Chart'
import {storiesOf} from '@storybook/react'

const chartStory = storiesOf('Chart')

chartStory.add('Default', () => <ChartStory />)