import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App(props) {
	const [name, upDateName] = useState('Fruits');
	return (
		<div className="Page-wrapper">
			<h1>Arete App</h1>
			<h2>{name} 2</h2>
		</div>
	);
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
