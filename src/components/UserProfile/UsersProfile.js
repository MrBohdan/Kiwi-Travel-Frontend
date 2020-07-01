import React, { useState, useEffect } from 'react';
import './UsersProfile.css';
import axsion from 'axios';/* 'axsion' connect HTTP request with backend*/

const UserProfiles = () => {

    const [userProfiles, setUserProfiles] = useState([]);

    const fetchUserProfiles = () => {
        axsion.get("api/v1.0/get").then(res => {
            console.log(res);

            setUserProfiles(res.data);
        });
    };

    useEffect(() => {
        fetchUserProfiles();
    }, []);

    return userProfiles.map((userProfiles, index) => {
        return (
            <div key={index}>
                <h5>{userProfiles.fullname}</h5>
                <p>{userProfiles.username}</p>
                <p>{userProfiles.id}</p>
            </div>
        )
    });
};

function UsersProfile() {
    return (
        <div className="UsersProfile">
            <header className="UsersProfile-header">
            <UserProfiles />
            </header>
        </div>
    );
}

export default UsersProfile;