import React from 'react';
import './Header.scss';

const nav = (props) => {
    return (
        <div id="header">
            <div id="logo_tag">
                <h1>todone</h1>
                <p>A simple todo app.</p>
            </div>
            <i className="gear-icon"></i>
        </div>
    )
};

export default nav;