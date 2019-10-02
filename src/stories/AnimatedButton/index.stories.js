import React from 'react'
import {storiesOf} from '@storybook/react'
import AnimatedButtonStory from '../AnimatedButton/AnimatedButton'

const animatedButtonStory = storiesOf('Animated Button')

animatedButtonStory.add('Animated Button', () => <AnimatedButtonStory />)