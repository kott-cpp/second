import React from 'react'
import ApolloClient from 'apollo-client'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://api.graphcms.com/simple/v1/swapi',
})

client
  .query({
    query: gql`
      {
        Starship(name: "Millennium Falcon") {
          name
          hyperdriveRating
          pilots(orderBy: height_DESC) {
            name
            height
            homeworld {
              name
            }
          }
        }
      }
    `,
  })
  .then(result => console.log(result.data.Starship.pilots[0]))

function pilotName() {
  const { loading, error, data } = useQuery(gql`
    {
      Starship(name: "Millennium Falcon") {
        name
        pilots {
          name
          height
        }
      }
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.Starship.pilots.map(({ name, height }) => (
    <div>
      <ul>
        <li>
          Name: {name} - Height: {height}cm
        </li>
      </ul>
    </div>
  ))
}


export default Pilot
