import React, { Component } from 'react';
import StudentsList from './StudentsList';
import Accomodations from './Accomodations';
import StudentsService from '../Services/students-service';
import { Accordion, Icon } from 'semantic-ui-react';

class StudentPage extends Component {
	state = {
		students: [
			{
				name: 'joe',
				grade: '12',
				id: 1
			},
			{
				name: 'z',
				grade: '11',
				id: 2
			}
		],
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
		toggleStudentForm: false,
		toggleAccomodationForm: false
	};

	toggleNewStudent = () => {
		this.setState({
			toggleStudentForm: true,
			toggleAccomodationForm: false
		});
	};

	toggleNewAccomodation = () => {
		this.setState({
			toggleAccomodationForm: true,
			toggleStudentForm: false
		});
	};

	submitNewStudent = (e) => {
		e.preventDefault();
		const { name, grade } = e.target;

		StudentsService.addNewStudent(name.value, grade.value).then((res) => {
			console.log(res.id);
			name.value = '';
			grade.value = '';
			this.setState({
				toggleStudentForm: false,
				students: [
					...this.state.students,
					{ name: res.name, grade: res.grade, id: res.id }
				]
			});
		});

		// this.setState({
		// 	toggleStudentForm: false,
		// 	students: [
		// 		...this.state.students,
		// 		{ name: name.value, grade: grade.value,id:res.id }
		// 	]
		// });
	};

	submitNewAccom = (e) => {
		e.preventDefault();
		const { accomName, description } = e.target;

		StudentsService.addAccomodation(
			accomName.value,
			description.value,
			this.props.match.params.id
		)
			.then((res) => {
				this.setState({
					accomodations: [
						...this.state.accomodations,
						{
							accomdation: accomName.value,
							description: description.value
						}
					]
				});
			})
			.then(() => {
				accomName.value = '';
				description.value = '';
			});
	};

	grabStudentsAccoms = (id) => {
		console.log('ran');
		StudentsService.getAccomodations(id).then((res) => {
			this.setState({
				oneStudentAccom: res
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

	// componentDidUpdate() {
	// 	StudentsService.getStudents().then((res) => {
	// 		if (this.state.students !== res) {
	// 			console.log(this.state.students);
	// 			this.setState({ students: res });
	// 		}
	// 	});
	// }

	componentDidMount() {
		StudentsService.getStudents().then((res) =>
			this.setState({ students: res })
		);
	}

	render() {
		const { activeIndex } = this.state;

		const studentform = (
			<form onSubmit={this.submitNewStudent}>
				<label>Student Name:</label>
				<input type='text' name='name' required></input>
				<label>Student Grade:</label>
				<input type='text' name='grade' required></input>
				<button type='submit'>Submit</button>
			</form>
		);
		const accomform = (
			<form onSubmit={this.submitNewAccom}>
				<label>Accommodation Name:</label>
				<input type='text' name='accomName' required></input>
				<label>Describe Accomodation:</label>
				<input type='text' name='description' required></input>
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
						id={students.id}
						key={index}
						click={() => this.grabStudentsAccoms(students.id)}
						delete={() =>
							this.removeStudent(students.id)
						}></StudentsList>
				))}{' '}
				{this.state.toggleStudentForm ? (
					studentform
				) : (
					<button onClick={this.toggleNewStudent}>
						Add New Student
					</button>
				)}
				<h2>Accomodation</h2>
				<Accomodations
					accoms={this.state.oneStudentAccom}
					active={activeIndex === 0}></Accomodations>
				{this.state.toggleAccomodationForm ? (
					accomform
				) : (
					<button onClick={this.toggleNewAccomodation}>
						Add Accomodation
					</button>
				)}
			</section>
		);
	}
}

export default StudentPage;
