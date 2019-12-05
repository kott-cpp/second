import React from 'react'
import {storiesOf} from '@storybook/react'
import SimpleSampleStory from './SimpleSample'

const story = storiesOf('SimpleSample')

story.add('Default', () => <SimpleSampleStory />)
