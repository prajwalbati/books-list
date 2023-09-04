import { gql, useQuery } from '@apollo/client';

const getBooksQuery = gql`
  query {
    books {
      name
      id
    }
  }
`

const BookList = () => {
  const { loading, error, data} = useQuery(getBooksQuery);
  console.log(loading);
      const displayBooks = () => {
        if (loading) {
            return <div>Loading Books...</div>
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id}>{book.name}</li>
                )
            });
        }
    };

    return (
      <div>
        <ul id="book-list">
          {displayBooks()}
        </ul>
      </div>
    );
}

export default BookList;