import { useQuery, useMutation } from '@apollo/client';

import { getBookQuery, getBooksQuery, deleteBookMutation } from '../queries/queries';

const BookDetails = ({ bookId }) => {
    const { loading, error, data} = useQuery(getBookQuery, {variables: {id: bookId}});
    const [ deleteBook ] = useMutation(deleteBookMutation);

    const deleteBookFunc = () => {
        deleteBook({
            variables: {id: bookId},
            refetchQueries: [{query: getBooksQuery}]
        }).then(data => {
            console.log(data);
        }).catch(e => {
            console.log(e.message);
        });
    };

    const getBookDetails = () => {
        if (loading) {
            return "Loading details...";
        } else {
            if (error) {
                console.log(error);
            } else {
                return (
                    <div>
                        <h3>{data.book.name} <button onClick={deleteBookFunc}>Delete this book</button></h3>
                        <p>Genre: {data.book.genre}</p>
                        <p>Author: {data.book.author.name}<button>Delete this author</button></p>
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