import React from 'react'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'

const portQuery = new ApolloClient({
  // uri: 'https://graphiql.graphcms.com/simple/v1/swapi',
  uri: 'http://localhost:3000/graphql',
})

portQuery.query({
  query: gql`
      {
          patchPanel(patchPanelId: 1) {
              panelJacks {
                  nodes {
                      id
                      connectedState
                      switchPortId
                  }
              }
              switchPorts {
                  nodes {
                      id
                      connectedState
                      panelJackId
                  }
              }
          }
      }
  `,
})