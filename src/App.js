import './App.css';
import React, {useState} from "react";


function App() {
	const [returnedData, setReturnedData] = useState("hi there")

	const getData = async (url) => {/// this function has a parameter that accepts a url. 
		/// the await fetch Gets the information (via the "url" parameter) in the app.get function in server.js
		const newData = await fetch(url, {
			method: "Get",
			/// headers help us tell the response how we are gettting and accepting data
			headers: { 
				'content-type': 'application/json',
				"Accept": "application/json"
			}
		})
		.then(res => res.json())

		console.log(newData);
		
		return newData;
	}

	getData("/api"); /// call the function ^. passes this argument which is the value in the app.get function in server.js

	return (
		<div className='App'>
			{returnedData}
		</div>
	);
}

export default App;
