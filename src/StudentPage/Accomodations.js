import React from 'react';
import { Card } from 'semantic-ui-react';

function Accomodations(props) {
	return (
		<section className='accomodations'>
			{props.accoms.map((accom, index) => (
				<Card
					key={index}
					header={`Accom:${accom.accomdation}`}
					description={`Description: ${accom.description}`}
				/>
			))}
		</section>
	);
}

export default Accomodations;
