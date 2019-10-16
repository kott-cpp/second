import React from 'react'
import ButtonStory from './Button'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

const buttonStory = storiesOf('Button')

/*
buttonStory.addDecorator(withKnobs)
buttonStory.add('Default', () => {
  const label = text('Label', 'Button')

  const doClick = action('Button Click')
  return (
    <section>
      <Button label={label} />
    </section>
  )
})
*/
 

buttonStory.add('Default', () => <ButtonStory />)
