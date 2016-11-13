import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Content from './components/Content';

ReactDOM.render(
	<div>
		<NavBar />
		<Header />
		<Content />
	</div>,
	document.getElementById('root')
);