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

const getBookQuery = gql`
    query($id: ID) {
        book(id: $id) {
            name
            id
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
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

const addAuthorMutation = gql`
    mutation($name: String!, $age: Int!) {
        addAuthor(name: $name, age: $age) {
            name
            id
        }
    }
`

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery, addAuthorMutation };