import { useState } from 'react';

import AddBook from "./AddBook";
import AddAuthor from "./AddAuthor";
import AddButton from "./AddButton";

const AddItemForm = () => {
    const [displayForm, setDisplayForm] = useState("");

    const showAddForm = (type) => {
        setDisplayForm(type);
    };

    return (
        <div>
            <AddButton showAddForm={showAddForm} />
            <AddBook displayForm={displayForm} />
            <AddAuthor displayForm={displayForm}  />
        </div>
    );
};

export default AddItemForm;