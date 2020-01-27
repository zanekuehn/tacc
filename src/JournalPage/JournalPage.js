import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import StudentServices from '../Services/students-service';
import moment from 'moment';

class JournalPage extends React.Component {
	state = {
		accoms: [],
		student: []
	};

	componentDidMount() {
		StudentServices.getSingleStudent(
			this.props.match.params.id
		).then((res) => this.setState({ student: res }));
		StudentServices.getAccomodations(this.props.match.params.id).then(
			(res) => {
				this.setState({ accoms: res });
			}
		);
	}

	render() {
		const accoms = this.state.accoms;
		return (
			<section>
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
								<Table.Cell textAlign='center'></Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</section>
		);
	}
}

export default JournalPage;
