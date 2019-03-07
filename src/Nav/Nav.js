import React from 'react';
import './Nav.scss';
import NavItem from './NavItem';


const nav = (props) => {
    return (
        <nav id="nav"> 
            <ul id="list-nav" className="nav nav-pills nav-fill">
                {props.displays.map((display, i) => {
                    if (display.id === props.activeDisplay){
                        return <NavItem key={i} click={props.switchDisplayHandler.bind(this, display.id)} id={display.id} label={display.label} activeClass="active" />
                    } else {
                        return <NavItem key={i} click={props.switchDisplayHandler.bind(this, display.id)} id={display.id} label={display.label} activeClass="" />
                    }
                }
                )}
            </ul>
        </nav> 
    )

};

export default nav;