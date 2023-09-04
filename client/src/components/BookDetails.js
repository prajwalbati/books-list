import { useQuery } from '@apollo/client';

import { getBookQuery } from '../queries/queries';

const BookDetails = ({ bookId }) => {
    const { loading, error, data} = useQuery(getBookQuery, {variables: {id: bookId}});

    const getBookDetails = () => {
        if (loading) {
            return "Loading details...";
        } else {
            if (error) {
                console.log(error);
            } else {
                return (
                    <div>
                        <h3>{data.book.name}</h3>
                        <p>{data.book.genre}</p>
                        <p>{data.book.author.name}</p>
                        <p>All Books by this author:</p>
                        <ul className="other-books">
                            {data.book.author.books.length > 0 && data.book.author.books.map(otherBook => {
                                return <li key={otherBook.id}>{otherBook.name}</li>
                            })}
                        </ul>
                    </div>
                );
            }

        }
    }

    return (
        <div id="book-details">
            <p>Book Details</p>
            {getBookDetails()}
        </div>
    );
}

export default BookDetails;