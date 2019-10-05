import React from 'react'
import cs from 'classnames'
import TwittleStory from './Twittle'
import {storiesOf} from '@storybook/react'


const twittleStory = storiesOf('Twittle')

twittleStory.add('Default', () => <TwittleStory />)