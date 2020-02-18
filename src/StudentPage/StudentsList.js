import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';

class StudentsList extends React.Component {
	state = {};

	delete = (<FontAwesomeIcon icon={faUserTimes} />);
	render() {
		return (
			<section className='student-list'>
				<Card
					className='accom-card'
					as={Link}
					to={`/student/${this.props.id}`}
					header={this.props.name}
					meta={this.props.classroom}
					description={`Grade:${this.props.grade}`}
					onClick={this.props.click}
				/>
				<button className='delete' onClick={this.props.delete}>
					{this.delete} {this.props.name}
				</button>
				<Link to={`/journal/${this.props.id}`}>
					<button>Journal</button>
				</Link>
			</section>
		);
	}
}
export default StudentsList;
