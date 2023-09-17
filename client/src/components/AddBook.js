import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';

import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

const AddBook = ({ displayForm, showAddForm }) => {
    const [ bookData, setBookData ] = useState({
        name: "",
        genre: "",
        authorId: ""
    });
    const [ successMessage, setSuccessMessage ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");
    const authorData = useQuery(getAuthorsQuery);
    const [ addBook, {loading, error} ] = useMutation(addBookMutation);

    const getAuthorsList = () => {
        if (authorData.loading) {
            return <option disabled>Loading Authors...</option>
        } else {
            return authorData.data.authors && authorData.data.authors.map(author => {
                return <option key={author.id} value={author.id}>{author.name}</option>;
            });
        }
    };

    const submitForm = (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");
        if (!bookData.name) {
            setErrorMessage("Book Name is Required");
            return;
        }
        if (!bookData.genre) {
            setErrorMessage("Genre is Required");
            return;
        }
        if (!bookData.authorId) {
            setErrorMessage("Author is Required");
            return;
        }
        addBook({
            variables: bookData,
            refetchQueries: [{query: getBooksQuery}]
        }).then(data => {
            setSuccessMessage("Book added successfully");
            setBookData({
                name: "",
                genre: "",
                authorId: ""
            });
        }).catch(e => {
            setErrorMessage(e.message);
        });
    };

    return (
        <form id="add-book" onSubmit={submitForm} className={displayForm==='book'?``:`hidden`}>
            <div className="field">
                <label>Book Name:</label>
                <input type="text" value={bookData.name} onChange={(e) => setBookData({...bookData, name: e.target.value})} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" value={bookData.genre} onChange={(e) => setBookData({...bookData, genre: e.target.value})} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select value={bookData.authorId} onChange={(e) => setBookData({...bookData, authorId: e.target.value})} >
                    <option>Select Author</option>
                    {getAuthorsList()}
                </select>
            </div>
            <p className="success text-right">{successMessage}</p>
            <p className="error text-right">{errorMessage}</p>
            <div className="actions">
                <button type="submit">{loading ? 'Adding...':'Add'}</button>
                <button type="button" onClick={() => showAddForm('')}>Cancel</button>
            </div>
        </form>
    );

};

export default AddBook;