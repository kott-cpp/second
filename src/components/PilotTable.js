import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import cx from 'classnames'
import style from './PilotTable.css'
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
      <table>
        <colgroup span="3" />
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Homeworld</th>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{height}cm</td>
          <td>{homeworld.name}</td>
        </tr>
      </table>
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

          <PilotName />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}
export default Pilot
