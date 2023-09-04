import { gql } from '@apollo/client';

const getAuthorsQuery = gql`
 {
  authors {
    name
    id
  }
}
`

const getBooksQuery = gql`
  query {
    books {
      name
      id
    }
  }
`

export { getAuthorsQuery, getBooksQuery };