import { useMutation } from '@apollo/client';
import { useState } from 'react';

import { getAuthorsQuery, addAuthorMutation } from '../queries/queries';

const AddAuthor = ({ displayForm, showAddForm }) => {
    const [ authorData, setAuthorData ] = useState({
        name: ""
    });
    const [ successMessage, setSuccessMessage ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");
    const [ addAuthor, {loading, error} ] = useMutation(addAuthorMutation);

    const updateAuthorData = (e) => {
        let value = e.target.name === "age" ? Number(e.target.value) : e.target.value;
        setAuthorData({...authorData, [e.target.name]: value});
    };

    const submitForm = async(e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");
        if (!authorData.name) {
            setErrorMessage("Author Name is Required");
            return;
        }
        if (!authorData.age) {
            setErrorMessage("Age is Required");
            return;
        }
        if (!Number(authorData.age)) {
            setErrorMessage("Age must be number");
            return;
        }
        addAuthor({
            variables: authorData,
            refetchQueries: [{query: getAuthorsQuery}]
        }).then(data => {
            setSuccessMessage("Author added successfully");
            setAuthorData({
                name: "",
                age: ""
            });
        }).catch(e => {
            setErrorMessage(e.message);
        });
    };

    return (
        <div className={`addAuthor ${displayForm==='author'?``:`hidden`}`}>
            <h3 className="text-center">Add Author</h3>
            <form onSubmit={submitForm}>
                <div className="field">
                    <label>Author Name:</label>
                    <input name="name" type="text" value={authorData.name} onChange={updateAuthorData} />
                </div>
                <div className="field">
                    <label>Age:</label>
                    <input name="age" type="number" value={authorData.age} onChange={updateAuthorData} />
                </div>
                <p className="success text-right">{successMessage}</p>
                <p className="error text-right">{errorMessage}</p>
                <div className="actions">
                    <button type="submit">{loading ? 'Adding...':'Add'}</button>
                    <button type="button" onClick={() => showAddForm('')}>Cancel</button>
                </div>
            </form>
        </div>
    );

};

export default AddAuthor;