import React, { Component } from "react";

//  Pure Component to display ONE todo
const Todo = props => (
	<div
		style={{
			"display": props.todo.delete ? "none" : "block",
			"background-color": props.todo.finished ? "green" : "white",
			color: props.todo.finished ? "white" : "black",
			height: 40,
			marginTop: 5,
			marginBottom: 5,
			paddinTop: 50
		}}
		onClick={() => {
			props.onFire(props.index);
		}}
		>
			<p>
				<input
					type="checkbox"
					id={props.todo.index}
					//checked={props.todo.state === "done"}
					onChange={props.todo.status === "done"}
				/>
				<span>{props.todo.title} : </span>
				{props.todo.text}
				<button
					onClick={() => {
						props.onDelete(props.index);
					}}
					>
						X
					</button>
				</p>
			</div>
		);

		export default Todo;
