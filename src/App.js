import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import StudentPage from './StudentPage/StudentPage';
import AccordionExampleStandard from './StudentPage/PracticePage';

function App() {
	return (
		<div className='App'>
			<Nav></Nav>
			<Route path='/student/:id' component={StudentPage} />
			{/* <Route path='/' component={AccordionExampleStandard} /> */}
		</div>
	);
}

export default App;
