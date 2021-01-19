import React, { useState } from 'react';

export default function App(props) {
	const [name, updateName] = useState('Lets Get Ready To Rumble');
	return (
		<div className="Page-wrapper">
			<h1>Ruth Application</h1>
			<h2>{name}</h2>
		</div>
	);
}
