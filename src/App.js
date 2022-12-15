import './App.css';
import React, {useState} from "react";
// const dbOperation = require("./dbFiles/dbOperation"); 


function App() {
	const [returnedData, setReturnedData] = useState("");
	/// be sure that the useState key matches the name in the input
	const [employee, setEmployee] = useState({sso: 0, fullname: "", email: "", birthday: "", password: ""});
	
	const setInput = (e) => {
		const {name, value} = e.target;
		console.log(value, name);
		// setEmployee({...employee , [name]: value}); /// change all the values 

		if(name === "sso") { /// if the input that we are in === sso, 
			setEmployee(prevState => ({
				...prevState,
				[name]: parseInt(value)/// convert the value that is entered into a number
			}));
			return; /// return early
		}
		setEmployee(prevState => ({ /// if not basically just keep the value. 
			...prevState,
			[name]: value
		}));
	}
	
	const fetchData = async () => {/// this function has a parameter that accepts a url. 
		console.log(employee);

		/// the await fetch Gets the information (via the "url" parameter) in the app.get function in server.js
		const newData = await fetch("/api", {
				method: "POST",
				headers: {
						"Content-Type":"application/json",
						"Accept":"application/json"
					},
					body: JSON.stringify({
						sso: employee.sso
			})
		})
		.then(res => res.json())
		console.table(newData)
		setReturnedData(newData[0]);
	}

	const createEmployee = async() => {
		console.log(employee);
		const newData = await fetch("/create", {
			method: "POST",
			headers: {
				"Content-Type":"application/json",
				"Accept":"application/json"
			},
			body: JSON.stringify({
				...employee
				// name: employee.fullname
			})
		})
		.then(res => res.json())
		setReturnedData(newData[0]);
	}

	return (
		<div className='App'>
			<input 
				type="number"
				name='sso'
				placeholder='SSO'
				onChange={setInput}>
			</input>

			<input
				name='fullname'
				placeholder='Full Name'
				onChange={setInput}>
			</input>

			<input
				type="email"
				name='email'
				placeholder='email'
				onChange={setInput}>
			</input>

			<input
				type="date"
				name="birthday"
				placeholder='D.O.B'
				onChange={setInput}>
			</input>

			<input
				type="password"
				name="password"
				placeholder='Password'
				onChange={setInput}>
			</input>
			<button onClick={() => fetchData()}>Click</button>
			<button onClick={() => createEmployee("/create")}>Create</button>
			<p>SSO: {returnedData.sso}</p>
			<p>Full Name: {returnedData.fullname}</p>
			<p>Email: {returnedData.email}</p>
			<p>D.O.B: {returnedData.birth}</p>
			<p>Password: {returnedData.pwd}</p>
		</div>
	);
}

export default App;
