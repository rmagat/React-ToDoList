import React, { Component } from "react";
import './App.css';

//  Pure Component to display ONE todo
const Todo = props => (
	<div
		className="divTodo"
		>
			<div
				style={{
					"background-color": props.todo.status ? "#00DFFC" : "#eee",
					height: 50
				}}

				>
					<input
						className="inputCheckbox"
						type="checkbox"
						id={props.todo.index}
						//checked={props.todo.state === "done"}
						onChange={() => {
							props.onFinished(props.index);
						}}
					/>
					<span className="pTodo">{props.todo.title} : {props.todo.text}</span>
					<button
						className="buttonTodo_style"
						>
							x
						</button>
					</div>
				</div>
			);

			export default Todo;
