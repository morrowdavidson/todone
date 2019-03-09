import React from 'react';

const todoItem = (props) => {
    return(
        <li className="list-group-item"><i className="far fa-circle"></i> <span>{props.content} <i class="far fa-trash-alt"></i></span></li>
    )
}

export default todoItem;