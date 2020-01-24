import React from 'react';
import { Link } from 'react-router-dom';

function StudentsList(props) {
	return (
		<section>
			<ul>
				{props.students.map((students, index) => (
					<section>
						{' '}
						<li>
							Name:{students.name} Grade:{students.grade}
						</li>
						<li></li>
					</section>
				))}
			</ul>
		</section>
	);
}

export default StudentsList;
