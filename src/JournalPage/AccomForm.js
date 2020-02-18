import React from 'react';

export default function AccomForm(props) {
	const date = new Date().toISOString().substr(0, 10);

	if (props.fields.length == 0) {
		return (
			<form onSubmit={props.submit}>
				{}
				<label>Date:</label>
				<input type='date' name='date' defaultValue={date}></input>
				<label>Accommodation Name:</label>
				<input type='text' name='accomName' required></input>
				<label>Describe Accomodation:</label>
				<input type='text' name='description' required></input>
				<label>Fulfilled?</label>
				<select name='fulfilled'>
					<option value='Yes'>Yes</option>
					<option value='No'>No</option>
				</select>
				<button type='submit'>Submit</button>
			</form>
		);
	} else {
		return (
			<section>
				{props.fields.map((field, index) => {
					return (
						<form key={index} onSubmit={props.submit}>
							{}
							<label>Date:</label>
							<input
								type='date'
								name='date'
								defaultValue={date}></input>
							<label>Accommodation Name:</label>
							<input
								type='text'
								name='accomName'
								placeholder='Enter the name of the Accom'
								defaultValue={field.accomdation}
								required></input>
							<label>Describe Accomodation:</label>
							<input
								type='text'
								name='description'
								defaultValue={field.description}
								placeholder='Enter Accom Description'
								required></input>
							<label>Fulfilled?</label>
							<select name='fulfilled'>
								<option value='Yes'>Yes</option>
								<option value='No'>No</option>
							</select>
							<button type='submit'>Submit</button>
						</form>
					);
				})}
			</section>
		);
	}
}
