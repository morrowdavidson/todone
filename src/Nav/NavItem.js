import React from 'react';

const navItem = (props) => {
    return (
        <li className="nav-item">
            <a className="nav-link" id={props.id + 'Nav'} href={'#' + props.id}>{props.label}</a>
        </li>
    )
};

export default navItem;