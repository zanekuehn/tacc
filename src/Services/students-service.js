import '../config';
import config from '../config';

const StudentsService = {
	getStudents() {
		return fetch(`${config.API_ENDPOINT}students`).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	addNewStudent(name, grade) {
		return fetch(`${config.API_ENDPOINT}students`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				name,
				grade
			})
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	addAccomodation(accomdation, description, id) {
		return fetch(`${config.API_ENDPOINT}students/${id}`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ accomdation, description })
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	getAccomodations(id) {
		return fetch(`${config.API_ENDPOINT}students/${id}`).then((res) =>
			res.json()
		);
	}
};

export default StudentsService;
