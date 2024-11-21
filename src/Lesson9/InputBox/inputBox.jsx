import "./inputBox.css"

const InputBox = ({createTodoBox}) => {
    return (
        <div className="inputBox">
            <div className="inputs">
            <form onSubmit={createTodoBox}>
                <input type="text" id="todoName" placeholder="Enter your name" required />
                <input type="number" id="todoAge" placeholder="Enter your age" required />
                <input type="email" id="todoEmail" placeholder="Enter your email" required />
                <input type="password" id="todoPassword" placeholder="Enter your password" required />
                <button type="submit">Login</button>
            </form>
            </div>
        </div>
    );
};

export default InputBox;
