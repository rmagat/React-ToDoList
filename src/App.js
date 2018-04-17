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
			this.createTodo("Café", "Trop bien", "todo"),
			this.createTodo("Caca", "Très sale", "todo"),
			this.createTodo("Clope", "En permanence", "done")
		],
	};
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	onFinished(index) {
		var todos = this.state.todos;
		todos[index].finished = !todos[index].finished;
		this.setState({
			todos: todos
		});
	}
	onDelete(index) {
		var todos = this.state.todos;
		todos[index].delete = !todos[index].delete;
		this.setState({
			todos: todos
		});
	}
	onStatus(index) {
		var todos = this.state.todos;
		todos[index].status = !todos[index].status;
		this.setState({
			todos: todos
		});
	}
	deleteAllChecked() {
		// this.setState({
		// 	todos: [...this.state.todos].filter(data => data.status == "todo")
		// });
		console.log(this.state.todos)
	}
	createTodo(title, text, state) {
		return {
			id: counter_index_todo++,
			title: title,
			text: text,
			status: state
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
						placeholder="Tilte"
						value={this.state.title}
						onChange={e => {
							this.setState({
								title: e.target.value
							});
						}}
					/>
					<input
						placeholder="Message"
						value={this.state.text}
						onChange={e => {
							this.setState({
								text: e.target.value
							});
						}}
					/>
					<button
						onClick={() => {
							var todos = this.state.todos;
							todos.push(this.createTodo(this.state.text, this.state.title, this.state.status));
							this.setState({
								todos: todos,
								title: "",
								text: "",
								status: ""
							});
						}}
						>
							Add
						</button>
					</div>
					<ListOfTodo
						onStatus={this.onFinished.bind(this)}
						todos={this.state.todos}
						onFinished={this.onFinished.bind(this)}
						onDelete={this.onDelete.bind(this)}
					/>
					<div>
						<button
							className="App-submit"
							onClick={() => {
								this.onShowHide;
							}}
						>
							Show/hide finished
						</button>
						<button
							className="App-submit"
							onClick={this.deleteAllChecked}
						>
							Delete checked todo
						</button>
					</div>
				</div>
			);
		}
	}

	export default App;
