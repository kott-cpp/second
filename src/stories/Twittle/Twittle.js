import React from 'react'
import TwittleStory from './Twittle'
import { storiesOf } from '@storybook/react'
import './styles.css'

const story = storiesOf('Twittle')

story.add('Default', () => <TwittleStory />)