import React from 'react';
import { Icon, Table } from 'semantic-ui-react';

class ClassPage extends React.Component {
	state = {
		classes: [
			{
				className: 'Algebra',
				teacher: 'John Smith'
			}
		]
	};

	render() {
		return (
			<section>
				<Table celled structured>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell rowSpan='2'>
								Class Name
							</Table.HeaderCell>
							<Table.HeaderCell rowSpan='2'>
								Teacher Name
							</Table.HeaderCell>
							<Table.HeaderCell rowSpan='2'>
								Files
							</Table.HeaderCell>
							<Table.HeaderCell colSpan='3'>
								Languages
							</Table.HeaderCell>
						</Table.Row>
						<Table.Row>
							<Table.HeaderCell>Ruby</Table.HeaderCell>
							<Table.HeaderCell>JavaScript</Table.HeaderCell>
							<Table.HeaderCell>Python</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Alpha Team</Table.Cell>
							<Table.Cell>Project 1</Table.Cell>
							<Table.Cell textAlign='right'>2</Table.Cell>
							<Table.Cell textAlign='center'>
								<Icon
									color='green'
									name='checkmark'
									size='large'
								/>
							</Table.Cell>
							<Table.Cell />
							<Table.Cell />
						</Table.Row>
					</Table.Body>
				</Table>
			</section>
		);
	}
}

export default ClassPage;
