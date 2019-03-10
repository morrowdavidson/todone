import React from 'react';

const todoItem = (props) => {
    return(
        <li className="list-group-item"><i data={props.id} onClick={props.checkedToggle} id={props.keyValue + 'CheckBox'} className={"far " + props.checkedClass}></i> <span>{props.content} <i data={props.id} onClick={props.removeItem} id={props.keyValue + 'DeleteButton'} className="far fa-trash-alt"></i></span>{props.quickLinks}</li>
    )
}

export default todoItem;