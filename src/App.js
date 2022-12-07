import './App.css';
import React, {useState} from "react";
// const dbOperation = require("./dbFiles/dbOperation"); 


function App() {
	const [returnedData, setReturnedData] = useState("");
	/// be sure that the useState key matches the name in the input
	const [employee, setEmployee] = useState({sso: 0, fullName: "", email: "", birthday: "", password: ""});
	
	const setInput = (e) => {
		const {name, value} = e.target;
		console.log(value, name);
		// setEmployee({...employee , [name]: value});

		if(name === "sso") { /// if the input that we are in === sso, convert the value that is entered into a number
			setEmployee(prevState => ({
				...prevState,
				[name]: parseInt(value)
			}));
			return; /// return early
		}
		setEmployee(prevState => ({ /// if not basically just keep the value. 
			...prevState,
			[name]: value
		}));
	}

	const fetchData = async (url) => {/// this function has a parameter that accepts a url. 
		console.log(employee);
		
		// /// the await fetch Gets the information (via the "url" parameter) in the app.get function in server.js
		// const newData = await fetch(url, {
		// 	method: "Get",
		// 	/// headers help us tell the response how we are gettting and accepting data
		// 	headers: { 
		// 		'content-type': 'application/json',
		// 		"Accept": "application/json"
		// 	}
		// })
		// .then(res => res.json())

		// console.log(newData);
		// setReturnedData(newData);
	}

	// getData("/api"); /// call the function ^. passes this argument which is the value in the app.get function in server.js

	return (
		<div className='App'>
			<input 
				type="number"
				name='sso'
				placeholder='SSO'
				onChange={setInput}>
			</input>

			<input
				name='fullName'
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
			<button onClick={() => fetchData("/api")}>Click</button>
			<button onClick={() => fetchData("/quit")}>Create</button>
			<p>SSO: {returnedData.sso}</p>
			<p>Full Name: {returnedData.fullName}</p>
			<p>Email: {returnedData.email}</p>
			<p>D.O.B: {returnedData.birth}</p>
			<p>Password: {returnedData.pwd}</p>
		</div>
	);
}

export default App;
