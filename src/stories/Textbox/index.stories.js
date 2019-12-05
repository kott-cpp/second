import React from 'react'
import { storiesOf } from '@storybook/react'
import TextboxStory from './Textbox'
import { withKnobs, text } from '@storybook/addon-knobs'

const story = storiesOf('Textbox')

// added this for knobs
story.addDecorator(withKnobs)
story.add('Name', () => {
  const style = { padding: 20 };
  const name = text('Name', 'Kevin');
  const age = text('Age', 30)

  return (
    <div style={style}>
      I am {name}.
       I am {age} years old
    </div>
  )
})

story.add('Default', () => <TextboxStory />)
