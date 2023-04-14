type frontmatter = {
	metadata: {
		title: string;
		description: string;
		date: string;
	};
};

export async function load() {
	const allPostFiles = import.meta.glob('../../posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const posts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as frontmatter;
			const { title, description, date } = metadata;
			const slug = path.slice(11, -3);

			return { title, description, date, slug };
		})
	);

	return { posts };
}
