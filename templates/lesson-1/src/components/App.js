import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App(props) {
	const [name, upDateName] = useState('Arthur');
	return (
		<div className="Page-wrapper">
			<h2>Arete App</h2>
			<h3>{name}</h3>
		</div>
	);
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
