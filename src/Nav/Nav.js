import React from 'react';
import './Nav.scss';
import NavItem from './NavItem';


const nav = (props) => {
    return (
        <nav id="nav"> 
            <ul id="list-nav" className="nav nav-pills nav-fill">
                {props.displays.map(display => <NavItem id={display.id} label={display.label}/>)}
            </ul>
        </nav> 
    )

};

export default nav;