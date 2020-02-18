import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import StudentServices from '../Services/students-service';
import AccomForm from './AccomForm';
import moment from 'moment';

class JournalPage extends React.Component {
	state = {
		accoms: [],
		student: [],
		accomForm: false,
		formFields: []
	};

	toggleNewAccomodation = () => {
		this.setState({
			accomForm: true
		});
	};

	grabAllAccoms = (id) => {
		StudentServices.getAllAccomodations(id).then((res) =>
			this.setState({ accoms: res })
		);
	};
	submitNewAccom = (e, id) => {
		e.preventDefault();
		const { accomName, description, date, fulfilled } = e.target;

		StudentServices.addAccomodation(
			accomName.value,
			description.value,
			date.value,
			fulfilled.value,
			id
		)
			.then((res) => {
				this.setState({
					accoms: [
						...this.state.accoms,
						{
							accomdation: res.accomdation,
							description: res.description,
							fulfilled: res.fulfilled
						}
					]
				});
			})
			.then(() => {
				accomName.value = '';
				description.value = '';
			});
	};

	async componentDidMount() {
		const getSingleStudent = StudentServices.getSingleStudent(
			this.props.match.params.id
		);
		const getAccomodations = StudentServices.getAccomodations(
			this.props.match.params.id
		);

		const fillForm = StudentServices.fillForm(this.props.match.params.id);

		const [student, accomodations, formfields] = await Promise.all([
			getSingleStudent,
			getAccomodations,
			fillForm
		]);

		this.setState({
			student: student,
			accoms: accomodations,
			formFields: formfields
		});
	}
	logName = () => {
		console.log(this.state.student);
	};

	render() {
		const accoms = this.state.accoms;

		return (
			<section>
				{this.state.student.map((student, index) => {
					return (
						<div key={index}>
							<h2>Student:{student.name}</h2>
							<h3>Classroom:{student.classroom}</h3>
							<h3>Grade:{student.grade}</h3>
						</div>
					);
				})}
				<Table celled structured>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell rowSpan='2'>
								Date
							</Table.HeaderCell>
							<Table.HeaderCell rowSpan='2'>
								Accomodation
							</Table.HeaderCell>
							<Table.HeaderCell rowSpan='2'>
								Description
							</Table.HeaderCell>
							<Table.HeaderCell rowSpan='2'>
								Fullfilled?
							</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{accoms.map((accom, index) => (
							<Table.Row key={index}>
								<Table.Cell>
									{moment
										.utc(accom.currentday)
										.format('MM/DD/YYYY')}
								</Table.Cell>

								<Table.Cell>{accom.accomdation}</Table.Cell>

								<Table.Cell textAlign='right'>
									{accom.description}
								</Table.Cell>
								<Table.Cell textAlign='center'>
									{accom.fulfilled}
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>

				{this.state.accomForm ? (
					<AccomForm
						submit={(e) =>
							this.submitNewAccom(e, this.state.student[0].id)
						}
						fields={this.state.formFields}
					/>
				) : (
					<button onClick={this.toggleNewAccomodation}>
						Add Accomodation
					</button>
				)}

				<button
					onClick={() =>
						this.grabAllAccoms(this.props.match.params.id)
					}>
					View Accom History
				</button>
			</section>
		);
	}
}

export default JournalPage;
