import React from 'react'
import { storiesOf } from '@storybook/react'
import TextboxStory from './Textbox'
import { withKnobs, text } from '@storybook/addon-knobs'

const story = storiesOf('Textbox')

// added this for knobs
story.addDecorator(withKnobs)
story.add('Name', () => {
  const style = { padding: 20 }
  const name = text('Name', 'Kevin')
  const age = text('Age', 48)

  return (
    <div style={style}>
      <TextboxStory name={name} age={age} />
      I am {name}. I am {age} years old
    </div>
  )
})

story.add('Default', () => {
  const value = text('Name', 'Kevin')
  const name = text('Name', 'Kevin')
  const age = text('Age', 48)

  return (
    <div>
      <TextboxStory name={name} age={age} />
    </div>
  )
})
