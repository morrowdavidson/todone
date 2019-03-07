import React from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';


const todoList = (props) => {
    return (
        <ul className="list-group" id="all-tasks-list">
            <TodoItem />
            <li id="all-tasks-list-input" className="list-group-item add-task-input d-none"><button className="fas fa-plus"></button><input type="text" /></li>
            <li id="all-tasks-list-button" className="list-group-item add-task-button"><button className="fas fa-plus"></button> Add a task</li>
        </ul>
    )

};

export default todoList;