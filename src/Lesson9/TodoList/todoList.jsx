import "./todoList.css"

const TodoList = ({ todo, deleteTodo, toggleCheckbox }) => {
    return (
        <div className="TodoList">
            {todo.map((item) => {
                return <div key={item.id} className="todoBox">
                    <input
                        type="checkbox"
                        checked={item.isChecked}
                        onChange={() => toggleCheckbox(item.id)}
                    />
                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                    <p>E-Mail: {item.email}</p>
                    <p>Password: {item.password}</p>
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </div>
            })}
        </div>
    );
};

export default TodoList;
