import React from 'react';

const navItem = (props) => {
    return (
        <li className="nav-item">
            <a onClick={props.click} className={'nav-link ' + props.activeClass} id={props.id + 'Nav'} href={'#' + props.id}>{props.label}</a>
        </li>
    )
};

export default navItem;