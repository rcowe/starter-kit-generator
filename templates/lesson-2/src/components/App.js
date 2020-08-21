import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';

function App(props) {
	const [name, upDateName] = useState('Arthur');
	return (
		<div className="Page-wrapper">
			<h2>Arete App</h2>
			<Home />
		</div>
	);
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
