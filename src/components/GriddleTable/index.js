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
  {
    id: 5,
    name: 'Kevin Ott 2',
    city: 'Fort Collins',
    state: 'Colorado',
    country: 'United States',
    department: 'Technical Services',
    manager: 'Scott Parrish',
  },
  {
    id: 6,
    name: 'Chris Bright 2',
    city: 'Johnstown',
    state: 'Colorado',
    country: 'United States',
    department: 'Design',
    manager: 'Travis Hawkins',
  },
  {
    id: 7,
    name: 'Nicolas Blaise 2',
    city: 'Toronto',
    state: 'Ontario',
    country: 'Canada',
    department: 'Engineering',
    manager: 'Anisa Como',
  },
  {
    id: 8,
    name: 'Adrian Maqnazanares 2',
    city: 'Sydney',
    state: 'Australia',
    country: 'Australia',
    department: 'Design',
    manager: 'Peter Bourke',
  },
  {
    id: 9,
    name: 'Scott Parrish 2',
    city: 'Fort Collins',
    state: 'Colorado',
    country: 'United States',
    department: 'Technical Services',
    manager: 'Laura Knight',
  },
  {
    id: 10,
    name: 'Kevin Ott 3',
    city: 'Fort Collins',
    state: 'Colorado',
    country: 'United States',
    department: 'Technical Services',
    manager: 'Scott Parrish',
  },
  {
    id: 11,
    name: 'Chris Bright 3',
    city: 'Johnstown',
    state: 'Colorado',
    country: 'United States',
    department: 'Design',
    manager: 'Travis Hawkins',
  },
  {
    id: 12,
    name: 'Nicolas Blaise 3',
    city: 'Toronto',
    state: 'Ontario',
    country: 'Canada',
    department: 'Engineering 3',
    manager: 'Anisa Como',
  },
  {
    id: 13,
    name: 'Adrian Maqnazanares 3',
    city: 'Sydney',
    state: 'Australia',
    country: 'Australia',
    department: 'Design',
    manager: 'Peter Bourke',
  },
  {
    id: 14,
    name: 'Scott Parrish 3',
    city: 'Fort Collins',
    state: 'Colorado',
    country: 'United States',
    department: 'Technical Services',
    manager: 'Laura Knight',
  },
  {
    id: 15,
    name: 'Kevin Ott 4',
    city: 'Fort Collins',
    state: 'Colorado',
    country: 'United States',
    department: 'Technical Services',
    manager: 'Scott Parrish',
  },
  {
    id: 16,
    name: 'Chris Bright 4',
    city: 'Johnstown',
    state: 'Colorado',
    country: 'United States',
    department: 'Design',
    manager: 'Travis Hawkins',
  },
  {
    id: 17,
    name: 'Nicolas Blaise 4',
    city: 'Toronto',
    state: 'Ontario',
    country: 'Canada',
    department: 'Engineering',
    manager: 'Anisa Como',
  },
  {
    id: 18,
    name: 'Adrian Maqnazanares 4',
    city: 'Sydney',
    state: 'Australia',
    country: 'Australia',
    department: 'Design',
    manager: 'Peter Bourke',
  },
  {
    id: 19,
    name: 'Scott Parrish 4',
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
