import React from 'react';

const todoItem = (props) => {
    return(
        <li className="list-group-item"><i className="far fa-circle"></i> {props.content}</li>
    )
}

export default todoItem;