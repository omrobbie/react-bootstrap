import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

import NavBar from './components/NavBar';

ReactDOM.render(
	<div>
		<NavBar />
	</div>,
	document.getElementById('root')
);