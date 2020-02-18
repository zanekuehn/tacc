import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';

export default class MenuExampleBasic extends React.Component {
	state = {};

	style = {
		color: 'white',
		backgroundColor: '#185632',
		border: '1px solid white'
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu>
				<Menu.Item
					className='items'
					as={Link}
					to='/student/1'
					name='Students'
					active={activeItem === 'Students'}
					onClick={this.handleItemClick}
					link={false}
					style={this.style}></Menu.Item>

				<Menu.Item
					as={Link}
					to='/journal/1'
					className='items'
					name='Accomodations'
					active={activeItem === 'Accomodations'}
					onClick={this.handleItemClick}
					link={false}
					style={this.style}></Menu.Item>
			</Menu>
		);
	}
}
