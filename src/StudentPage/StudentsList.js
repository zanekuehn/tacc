import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

class StudentsList extends React.Component {
	state = {};
	render() {
		const accomform = (
			<form onSubmit={this.props.submitNewAccom}>
				<label>Date:</label>
				<input
					type='date'
					name='date'
					defaultValue={this.props.today}></input>
				<label>Accommodation Name:</label>
				<input type='text' name='accomName' required></input>
				<label>Describe Accomodation:</label>
				<input type='text' name='description' required></input>
				<label>Fulfilled?</label>
				<select name='fulfilled'>
					<option value='Yes'>Yes</option>
					<option value='No'>No</option>
				</select>
				<button type='submit'>Submit</button>
			</form>
		);
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
				{this.props.accomForm ? (
					accomform
				) : (
					<button onClick={this.props.toggleAccomForm}>
						Add Accomodation
					</button>
				)}
			</section>
		);
	}
}
export default StudentsList;
