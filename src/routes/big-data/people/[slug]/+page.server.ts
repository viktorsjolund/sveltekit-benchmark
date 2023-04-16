import { error } from '@sveltejs/kit';
import people from '../../../../data/big-data.json';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const person = people.find((person) => {
		return person.id === parseInt(params.slug);
	});

	if (!person) {
		throw error(404, 'Not found');
	}

	return {
		person
	};
}
