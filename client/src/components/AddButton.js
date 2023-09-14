
const AddButton = ({ showAddForm, displayForm }) => {

    return (
        <div className={`addButton ${displayForm===""?"":"hidden"}`}>
            <button onClick={() => showAddForm('author')}>Add Author</button>
            <button onClick={() => showAddForm('book')}>Add Book</button>
        </div>
    );
}

export default AddButton;