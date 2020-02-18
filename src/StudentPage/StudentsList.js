import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

class StudentsList extends React.Component {
	state = {};
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
				<button onClick={this.props.delete}>
					Delete {this.props.name}
				</button>
				<Link to={`/journal/${this.props.id}`}>
					<button>Journal</button>
				</Link>
			</section>
		);
	}
}
export default StudentsList;
