import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from '../../actions/actions'

const LoginRegister = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [isRegister, setIsRegister] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            dispatch(register(formData));
        } else {
            dispatch(login(formData));
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>{isRegister ? "Register" : "Login"}</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">{isRegister ? "Register" : "Login"}</button>
                </form>
                <p>
                    {isRegister
                        ? "Already have an account? "
                        : "Don't have an account? "}
                    <button
                        onClick={() => setIsRegister((prev) => !prev)}
                        className="toggle-btn"
                    >
                        {isRegister ? "Login" : "Register"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginRegister;