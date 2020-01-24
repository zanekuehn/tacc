import React from 'react';

function Accomodations(props) {
	return (
		<section>
			<section className='accom-section'>
				<li>Accomodation Name:{props.name}</li>
				<li>Description:{props.description}</li>
			</section>
		</section>
	);
}

export default Accomodations;
