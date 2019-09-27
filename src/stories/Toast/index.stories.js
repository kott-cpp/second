import React from 'react'
import ToastStory from './Toast'
import { storiesOf } from '@storybook/react'

const story = storiesOf('Toast')

story.add('Default', () => <ToastStory />)