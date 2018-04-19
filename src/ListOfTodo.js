import React, { Component } from "react";
import Todo from "./Todo";
import './App.css';

const ListOfTodo = props => (
	<div className="divListTodo">
		{props.todos.map((todo, index) => {
			//
			return (
				<Todo
					key={todo.id}
					todo={todo}
					index={index}
					onFinished={props.onFinished}
					onTodoDelete={props.onTodoDelete}
				/>
			);
		})}
	</div>
);

export default ListOfTodo;
