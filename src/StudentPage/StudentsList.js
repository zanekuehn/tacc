import React from 'react';
import { Link } from 'react-router-dom';

function StudentsList(props) {
	return (
		<Link to={`/student/${props.id}`} onClick={props.grabAccoms}>
			<div onClick={props.studentsAccoms} className='student-list'>
				<li>{props.name}</li>
				<li>{props.grade}</li>
			</div>
		</Link>
	);
}

export default StudentsList;
