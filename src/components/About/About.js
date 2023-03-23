import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Usercontext';

const About = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>Secret about ussss</h2>
            <p>{user?.email}</p>
        </div>
    );
};

export default About;