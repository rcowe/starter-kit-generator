import React, { useState } from 'react';

export default function Home(props) {
	const [cardText, updateCardText] = useState('');

	const addACard = element => {
		let promptCardText = window.prompt('Enter Your Text', 'enter text here');
		const list = document.getElementById(element);
		const card = document.createElement('li');
		card.innerText = promptCardText;
		list.appendChild(card);
		return;
	};
	const addWinnie = event => {
		return addACard('winnie-list');
	};
	const addBob = event => {
		return addACard('bob-list');
	};
	const addThomas = event => {
		return addACard('thomas-list');
	};
	const addGeorge = event => {
		return addACard('george-list');
	};
	return (
		<div className="Page">
			<div className="column">
				<h2 className="heading winnie">Winnie</h2>
				<ul id="winnie-list"></ul>
				<button onClick={addWinnie}>Add A Task</button>
			</div>
			<div className="column">
				<h2 className="heading bob">Bob</h2>
				<ul id="bob-list"></ul>
				<button onClick={addBob}>Add A Task</button>
			</div>
			<div className="column">
				<h2 className="heading thomas">Thomas</h2>
				<ul id="thomas-list"></ul>
				<button onClick={addThomas}>Add A Task</button>
			</div>
			<div className="column">
				<h2 className="heading george">George</h2>
				<ul id="george-list"></ul>
				<button onClick={addGeorge}>Add A Task</button>
			</div>
		</div>
	);
}

/* export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			cardText: ''
		};
	}
	addACard = element => {
		let cardText = window.prompt('Enter Your Text', 'enter text here');
		const list = document.getElementById(element);
		const card = document.createElement('li');
		card.innerText = cardText;
		list.appendChild(card);
		return;
	};
	addWinnie = event => {
		return this.addACard('winnie-list');
	};
	addBob = event => {
		return this.addACard('bob-list');
	};
	addThomas = event => {
		return this.addACard('thomas-list');
	};
	addGeorge = event => {
		return this.addACard('george-list');
	};
	render() {
		return (
			<div className="Page">
				<div className="column">
					<h2 className="heading winnie">Winnie</h2>
					<ul id="winnie-list">
						<li>1 Card</li>
						<li>43 Card</li>
					</ul>
					<button onClick={this.addWinnie}>Add A Task</button>
				</div>
				<div className="column">
					<h2 className="heading bob">Bob</h2>
					<ul id="bob-list">
						<li>1 Card</li>
						<li>3 Card</li>
					</ul>
					<button onClick={this.addBob}>Add A Task</button>
				</div>
				<div className="column">
					<h2 className="heading thomas">Thomas</h2>
					<ul id="thomas-list">
						<li>1 Card</li>
						<li>2 Card</li>
					</ul>
					<button onClick={this.addThomas}>Add A Task</button>
				</div>
				<div className="column">
					<h2 className="heading george">George</h2>
					<ul id="george-list">
						<li>1 Card</li>
						<li>2 Card</li>
					</ul>
					<button onClick={this.addGeorge}>Add A Task</button>
				</div>
			</div>
		);
	}
}*/
