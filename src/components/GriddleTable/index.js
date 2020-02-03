import cx from 'classnames'
import React from 'react'

import Griddle, {
  plugins,
  ColumnDefinition,
  RowDefinition,
} from 'griddle-react'

export const data = [
  {
    id: 0,
    name: 'Kevin Ott',
    city: 'Fort Collins',
    state: 'Colorado',
    country: 'United States',
    department: 'Technical Services',
    manager: 'Scott Parrish',
  },
  {
    id: 1,
    name: 'Chris Bright',
    city: 'Johnstown',
    state: 'Colorado',
    country: 'United States',
    department: 'Design',
    manager: 'Travis Hawkins',
  },
  {
    id: 2,
    name: 'Nicolas Blaise',
    city: 'Toronto',
    state: 'Ontario',
    country: 'Canada',
    department: 'Engineering',
    manager: 'Anisa Como',
  },
  {
    id: 3,
    name: 'Adrian Maqnazanares',
    city: 'Sydney',
    state: 'Australia',
    country: 'Australia',
    department: 'Design',
    manager: 'Peter Bourke',
  },
  {
    id: 4,
    name: 'Scott Parrish',
    city: 'Fort Collins',
    state: 'Colorado',
    country: 'United States',
    department: 'Technical Services',
    manager: 'Laura Knight',
  },
]

const styleConfig = {
  styles: {
    Filter: {fontSize: 12},
  }
}

const GriddleTable = () => {
  return (
    <Griddle data={data} plugins={[plugins.LocalPlugin]} styleConfig={styleConfig}>
      <RowDefinition>
        <ColumnDefinition id="name" title='name' width={200} />
        <ColumnDefinition id="city" title='city' />
        <ColumnDefinition id="state" title='state' />
      </RowDefinition>
    </Griddle>
  )
}

export default GriddleTable
