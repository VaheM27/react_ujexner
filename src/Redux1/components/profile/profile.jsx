import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../actions/actions';
import './profile.css';

const Profile = () => {
    const selector = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    if (!selector.isAuthenticated) {
        return <div>Please log in or register.</div>;
    }

    return (
        <div className="profile-container">
            <h1>Welcome, {selector.user.username}!</h1>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    );
};

export default Profile;
