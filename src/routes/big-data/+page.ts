/** @type {import('./$types').PageLoad} */
export function load({ route }) {
	return {
		pathname: route.id
	};
}
