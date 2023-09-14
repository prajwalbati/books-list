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
        <div className="addItemForm">
            <AddButton displayForm={displayForm} showAddForm={showAddForm} />
            <AddBook displayForm={displayForm} showAddForm={showAddForm} />
            <AddAuthor displayForm={displayForm} showAddForm={showAddForm} />
        </div>
    );
};

export default AddItemForm;