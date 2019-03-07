import React, { Component } from 'react';
import './Nav.scss';
import NavItem from './NavItem';


class Nav extends Component {
    render() {
    return (
    <nav id="nav"> 
        <ul id="list-nav" className="nav nav-pills nav-fill">
            <NavItem id="today" label="Today"/>
            <NavItem id="week" label="This Week"/>
            <NavItem id="all" label="All Tasks"/>
        </ul>
    </nav> 
    )
    }
};

export default Nav;