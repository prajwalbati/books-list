import { gql, useQuery } from '@apollo/client';

import { getAuthorsQuery } from '../queries/queries';

const AddBook = () => {
    const { loading, error, data} = useQuery(getAuthorsQuery);
    const getAuthorsList = () => {
        if (loading) {
            return <option disabled>Loading Authors...</option>
        } else {
            return data.authors && data.authors.map(author => {
                return <option key={author.id} value={author.id}>{author.name}</option>;
            });
        }
    };

    return (
        <form id="add-book">
            <div className="field">
                <label>Book Name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select Author</option>
                    {getAuthorsList()}
                </select>
            </div>
            <button>+</button>
        </form>
    );

};

export default AddBook;