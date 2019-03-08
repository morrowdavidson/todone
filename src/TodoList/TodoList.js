import React from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';


const todoList = (props) => {
    return (
        <ul className="list-group" id={props.id + "list"}>
            <TodoItem />
            <li id={props.id + "ListInput"} className="list-group-item add-task-input d-none"><button className="fas fa-plus"></button><input type="text" /></li>
            <li id={props.id + "ListButton"} className="list-group-item add-task-button"><button className="fas fa-plus"></button>{props.buttonLabel}</li>
        </ul>
    )

};

export default todoList;