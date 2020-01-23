import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import StudentPage from './StudentPage/StudentPage';

function App() {
	return (
		<div className='App'>
			<Nav></Nav>
			<Route path='/student/:id' component={StudentPage} />
		</div>
	);
}

export default App;
