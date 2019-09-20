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
        allFilms {
            title
            director
          }
        }
    `,
  })
  .then(result => console.log(result.data.allFilms.films))

function FilmName() {
  const { loading, error, data } = useQuery(gql`
    {
      allFilms {
          title
          director
        }
      }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.allFilms.map(({ title, director }) => (
    <div>
      <ul>
        <li>
          Title: {title} - Director: {director}
        </li>
      </ul>
    </div>
  ))
}
function Films() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Helmet>
            <title>My Page</title>
          </Helmet>
          <p>Films</p>
          <FilmName />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}
export default Films
*/