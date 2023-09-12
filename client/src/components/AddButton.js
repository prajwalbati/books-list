
const AddButton = ({ showAddForm }) => {

    return (
        <div className="addButton">
            <button onClick={() => showAddForm('author')}>Add Author</button>
            <button onClick={() => showAddForm('book')}>Add Book</button>
        </div>
    );
}

export default AddButton;