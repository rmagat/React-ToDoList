import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfTodo from "./ListOfTodo";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

var counter_index_todo = 0;

class App extends Component {
	state = {
		todos: [
			this.createTodo("Android", "Appel API"),
			this.createTodo("Perso", "RDV Médecin"),
			this.createTodo("Copine", "Sexe")
		],
	};
	onFinished(index) {
		var todos = this.state.todos;
		todos[index].status = !todos[index].status;
		this.setState({
			todos: todos
		});
		console.log(this.state.todos)
	}

	onTodoDelete(index) {
		var todos = this.state.todos;
		todos.splice(index, 1);
		this.setState({
			todos: todos
		});
		console.log(this.state.todos)
	}

	deleteAllChecked() {
		this.setState({
	 		todos: [...this.state.todos].filter(data => data.status == false)
		});
		console.log(this.state.todos)
	}

	createTodo(title, text, state) {
		return {
			id: counter_index_todo++,
			title: title,
			text: text,
			status: false
		};
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h1 className="header_name">ToDoList</h1>
				</div>
				<div className="divAddTodo">
					<input
						className="inputText_style"
						placeholder="Tilte"
						value={this.state.title}
						onChange={e => {
							this.setState({
								title: e.target.value
							});
						}}
					/>
					<input
						className="inputText_style"
						placeholder="Message"
						value={this.state.text}
						onChange={e => {
							this.setState({
								text: e.target.value
							});
						}}
					/>
					<button
						className="button_style"
						onClick={() => {
							var todos = this.state.todos;
							todos.push(this.createTodo(this.state.text, this.state.title, this.state.status));
							this.setState({
								todos: todos,
								title: "",
								text: ""
							});
						}}
						>
							Add
						</button>
					</div>
					<ListOfTodo
						todos={this.state.todos}
						onFinished={this.onFinished.bind(this)}
						onTodoDelete={this.onTodoDelete.bind(this)}
					/>
					<div>
						<button
							className="button_styleEnd"
						>
							Show/hide finished
						</button>
						<button
							className="button_styleEnd"
							onClick={this.deleteAllChecked.bind(this)}
						>
							Delete checked todo
						</button>
					</div>
				</div>
			);
		}
	}

	export default App;
