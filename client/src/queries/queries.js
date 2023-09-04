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

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre:$genre, authorId:$authorId) {
            name
            id
        }
    }
`

export { getAuthorsQuery, getBooksQuery, addBookMutation };