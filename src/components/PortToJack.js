import React from 'react'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'

/*export const portQuery = new ApolloClient({
  // uri: 'https://graphiql.graphcms.com/simple/v1/swapi',
  uri: 'http://localhost:3000/graphql',
})
*/

export const mutationPortQuery = gql`
    mutation($input: PortToJackAssignmentInput!) {
        portToJackAssignment(input: $input) {
            errors {
                ...messageFragment
            }
            messages {
                ...messageFragment
            }
            panelJack {
                id
                connectedState
                switchPortId
            }
            switchPort {
                id
                connectedState
                panelJackId
            }
        }
    }
    fragment messageFragment on Message {
        title
        body
        category
        autoClose
        icon
    }
`



/*const resultPortQuery = await portQuery
  .mutate({
    variables: { input: { panelJackId: 298, switchPortId: 229, }, },
    mutation: gql`
      mutation($input: PortToJackAssignmentInput!) {
        portToJackAssignment(input: $input) {
          errors {
            ...messageFragment
          }
          messages {
            ...messageFragment
          }
          panelJack {
            id
            connectedState
            switchPortId
          }
          switchPort {
            id
            connectedState
            panelJackId
          }
        }
      }
      fragment messageFragment on Message {
        title
        body
        category
        autoClose
        icon
      }
    `,
  })
  .then(data => {
    console.log('Update Mutation', data)
  })
  */

