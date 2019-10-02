import React from 'react'
import HamburgerStory from './Hamburger'
import { storiesOf } from '@storybook/react'

const story = storiesOf('Hamburger')

story.add('Default', () => <HamburgerStory />)