/*import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import Helmet from 'react-helmet'

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
            species {
              name
            }
            films {
              title
            }
          }
        }
      }
    `,
  })
  .then(result => console.log(result.data.Starship.pilots[0]))

function PilotName() {
  const { loading, error, data } = useQuery(gql`
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
          species {
            name
          }
          films {
            title
          }
        }
      }
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.Starship.pilots.map(({ name, height, homeworld }) => (
    <div>
      <ul>
        <li>
          Name: {name} - Height: {height}cm -{homeworld.name}
        </li>
      </ul>
    </div>
  ))
}
function Pilot() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Helmet>
            <title>My Page</title>
          </Helmet>
          <p>Pilot</p>
          <PilotName />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}
export default Pilot
*/