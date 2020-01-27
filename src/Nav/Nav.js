import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav className='nav-bar'>
			<li>
				<Link to='/student/1'>Student</Link>
			</li>

			<li>Class</li>
			<Link to='/journal/1'>
				<li>Journal</li>
			</Link>
		</nav>
	);
}

export default Nav;
