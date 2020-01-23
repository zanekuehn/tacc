import React, { Component } from 'react';
import StudentsList from './StudentsList';
import Accomodations from './Accomodations';
import StudentsService from '../Services/students-service';

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
		params: this.props.match.params.id,

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

	singleStudentsAccomodations = (id) => {
		const accomodations = this.state.accomodations;
		const newArray = [];

		for (let i in accomodations) {
			if (id == accomodations[i].accom_id) {
				newArray.push(accomodations[i]);
				this.setState({ oneStudentAccom: newArray });
			}
		}
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
		console.log('I ran!');
		e.preventDefault();
		const { name, grade } = e.target;
		console.log(name.value, grade.value);

		StudentsService.addNewStudent(name.value, grade.value).then((res) => {
			name.value = '';
			grade.value = '';
		});

		this.setState({
			toggleStudentForm: false,
			students: [
				...this.state.students,
				{ name: name.value, grade: grade.value }
			]
		});
	};

	submitNewAccom = (e) => {
		e.preventDefault();
		const { accomName, description } = e.target;

		StudentsService.addAccomodation(
			accomName.value,
			description.value,
			this.state.params
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
		StudentsService.getAccomodations(id).then((res) => {
			this.setState({
				oneStudentAccom: res
			});
		});
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
			<section className='student-page-container'>
				{this.state.students.map((student, index) => (
					<StudentsList
						name={student.name}
						grade={student.grade}
						id={student.id}
						key={index}
						studentsAccoms={() =>
							this.singleStudentsAccomodations(student.id)
						}
						grabAccoms={() => this.grabStudentsAccoms(student.id)}
					/>
				))}
				{this.state.toggleStudentForm ? (
					studentform
				) : (
					<button onClick={this.toggleNewStudent}>
						Add New Student
					</button>
				)}
				{this.state.toggleAccomodationForm ? (
					accomform
				) : (
					<button onClick={this.toggleNewAccomodation}>
						Add Accomodation
					</button>
				)}

				{this.state.oneStudentAccom.map((accom, index) => (
					<Accomodations
						name={accom.accomdation}
						description={accom.description}
						key={index}
					/>
				))}
			</section>
		);
	}
}

export default StudentPage;
