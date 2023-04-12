import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import fs from 'fs/promises';

type Person = {
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	id: number;
};

export const load = (async () => {
	const bigData = await fs.readFile('src/data/big-data.json', 'utf-8');
	if (!bigData) {
		return error(500, 'Internal Server Error');
	}

	const people = JSON.parse(bigData) as Person[];

	return {
    people
  };
}) satisfies PageServerLoad;
