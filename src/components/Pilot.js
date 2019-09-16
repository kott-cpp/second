import React from 'react'
import ApolloClient from 'apollo-client'

const Pilot = () => {
  return (
    <div>
      <p>Pilot</p>
    </div>
  )
}
/*
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
*/
export default Pilot
