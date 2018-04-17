import React, { Component } from "react";
import Todo from "./Todo";

const ListOfTodo = props => (
	<div>
		{props.todos.map((todo, index) => {
			//
			return (
				<Todo
					key={todo.id}
					todo={todo}
					index={index}
					onStatus={props.onStatus}
					onFire={props.onFinished}
					onDelete={props.onDelete}
				/>
			);
		})}
	</div>
);

export default ListOfTodo;
