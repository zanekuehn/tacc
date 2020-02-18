import React, { Component } from 'react';
import StudentsList from './StudentsList';

import StudentsService from '../Services/students-service';

class StudentPage extends Component {
	state = {
		today: '',
		students: [],
		accomodations: [
			{
				name: 'help',
				description: 'needs help',
				accom_id: 1
			},
			{
				name: 'help',
				description: 'needs help',
				accom_id: 1
			},
			{ name: 'stuffs', description: 'needs help', studentId: 2 }
		],
		oneStudentAccom: [],
		toggleStudentForm: false
	};

	toggleNewStudent = () => {
		this.setState({
			toggleStudentForm: true
		});
	};

	submitNewStudent = (e) => {
		e.preventDefault();
		const { name, grade, classroom } = e.target;

		StudentsService.addNewStudent(
			name.value,
			grade.value,
			classroom.value
		).then((res) => {
			console.log(res.id);
			name.value = '';
			grade.value = '';
			this.setState({
				toggleStudentForm: false,
				students: [
					...this.state.students,
					{
						name: res.name,
						grade: res.grade,
						id: res.id,
						classroom: res.classroom
					}
				]
			});
		});
	};

	removeStudent = (id) => {
		StudentsService.deleteStudent(id).then(
			this.setState({
				students: this.state.students.filter(
					(student) => student.id !== id
				)
			})
		);
	};

	componentDidMount() {
		StudentsService.getStudents().then((res) =>
			this.setState({ students: res })
		);
	}

	render() {
		const studentform = (
			<form onSubmit={this.submitNewStudent}>
				<label>Student Name:</label>
				<input type='text' name='name' required></input>
				<label>Student Grade:</label>
				<input
					type='number'
					name='grade'
					defaultValue='9'
					min='9'
					max='12'
					required></input>
				<label>Class Name:</label>
				<input type='text' name='classroom' required></input>
				<button type='submit'>Submit</button>
			</form>
		);

		return (
			<section>
				<h2>Student List</h2>
				{this.state.students.map((students, index) => (
					<StudentsList
						name={students.name}
						grade={students.grade}
						classroom={students.classroom}
						id={students.id}
						key={index}
						delete={() => this.removeStudent(students.id)}
						today={this.state.today}
						paramsID={this.props.match.params.id}></StudentsList>
				))}{' '}
				{this.state.toggleStudentForm ? (
					studentform
				) : (
					<button onClick={this.toggleNewStudent}>
						Add New Student
					</button>
				)}
			</section>
		);
	}
}

export default StudentPage;
