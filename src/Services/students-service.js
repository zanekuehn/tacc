import '../config';
import config from '../config';

const StudentsService = {
	getStudents() {
		return fetch(`${config.API_ENDPOINT}students`).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	addNewStudent(name, grade, classroom) {
		return fetch(`${config.API_ENDPOINT}students`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				name,
				grade,
				classroom
			})
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},

	deleteStudent(id) {
		return fetch(`${config.API_ENDPOINT}students/${id}`, {
			method: 'DELETE',
			headers: { 'content-type': 'application/json' }
		});
	},
	addAccomodation(accomdation, description, currentday, fulfilled, id) {
		return fetch(`${config.API_ENDPOINT}students/${id}`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				accomdation,
				description,
				currentday,
				fulfilled
			})
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	getAccomodations(id) {
		return fetch(`${config.API_ENDPOINT}students/${id}`).then((res) =>
			res.json()
		);
	},
	getSingleStudent(id) {
		return fetch(
			`${config.API_ENDPOINT}students/student/${id}`
		).then((res) => res.json());
	}
};

export default StudentsService;
