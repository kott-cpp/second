import React from 'react'
import ButtonStory from './Button'
import {storiesOf} from '@storybook/react'

const buttonStory = storiesOf('Button')

buttonStory.add('Default', () => <ButtonStory />)
