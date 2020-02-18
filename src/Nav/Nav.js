import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleBasic extends React.Component {
	state = {};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu>
				<Link className='items' to='/student/1'>
					<Menu.Item
						name='editorials'
						active={activeItem === 'editorials'}
						onClick={this.handleItemClick}
						link={false}>
						<Link to='/student/1'>Students</Link>
					</Menu.Item>
				</Link>
				<Link to='/journal/1' className='items'>
					<Menu.Item
						name='reviews'
						active={activeItem === 'reviews'}
						onClick={this.handleItemClick}
						link={false}>
						<Link to='/journal/1'>Accomodations</Link>
					</Menu.Item>
				</Link>
			</Menu>
		);
	}
}
