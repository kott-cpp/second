import ApolloClient from 'apollo-client'
import { gql } from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.graphcms.com/simple/v1/swapi',
})

export const pilotQuery = client.query({

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
