import React from 'react';
import './Nav.scss';

const nav = (props) => {
    return (
    <nav id="nav"> 
        <ul id="list-nav" className="nav nav-pills nav-fill">
        <li className="nav-item">
            <a className="nav-link" id="today-nav" href="#today">Today</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" id="this-week-nav" href="#thisWeek">This Week</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" id="all-tasks-nav" href="#allTodos">All Tasks</a>
        </li>
        </ul>
    </nav> 
    )
};

export default nav;