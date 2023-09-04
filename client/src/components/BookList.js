import { useQuery } from '@apollo/client';

import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';
import { useState } from 'react';

const BookList = () => {
    const [selectedBook, setSelectedBook] = useState("");
    const { loading, error, data} = useQuery(getBooksQuery);
    const displayBooks = () => {
        if (loading) {
            return <div>Loading Books...</div>
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id} onClick={() => setSelectedBook(book.id)}>{book.name}</li>
                )
            });
        }
    };

    return (
      <div>
        <ul id="book-list">
          {displayBooks()}
        </ul>
        { selectedBook && <BookDetails bookId={selectedBook} /> }
      </div>
    );
}

export default BookList;