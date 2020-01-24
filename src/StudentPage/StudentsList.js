import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const StudentsList = (props) => (
	<section className='student-list'>
		<Card
			className='accom-card'
			as={Link}
			to={`/student/${props.id}`}
			header={props.name}
			meta='Student'
			description={props.grade}
			onClick={props.click}
		/>
		<button onClick={props.delete}>Delete {props.name}</button>
	</section>
);

export default StudentsList;
