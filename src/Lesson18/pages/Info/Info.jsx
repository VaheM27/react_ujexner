import React, { useState } from "react";
import "./Info.css";
import axios from "axios";

const Info = ({ userInfo, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = () => {
        setIsModalOpen(true);
    };

    const confirmDelete = async () => {
        try {
            setIsModalOpen(false);
            await axios.delete(`http://localhost:3001/users/${userInfo.id}`);
            onDelete(userInfo.id);
            alert("User data deleted successfully.");
        } catch (error) {
            alert("Error deleting user data. Please try again.");
        }
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
    };

    if (!userInfo) {
        return <div className="Info">No user data available.</div>;
    }

    return (
        <div className="Info">
            <h1>User Information</h1>
            <p><strong>Username:</strong> {userInfo.username}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Phone:</strong> {userInfo.phone}</p>
            <p><strong>Address:</strong> {userInfo.address}</p>
            <p><strong>Age:</strong> {userInfo.age}</p>
            <button onClick={handleDelete}>Delete This User Data</button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Are you sure you want to delete this user data?</p>
                        <div className="btns">
                            <button onClick={confirmDelete} className="confirm-btn">Yes</button>
                            <button onClick={cancelDelete} className="cancel-btn">No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Info;
