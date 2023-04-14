<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { title, date, content } = data;
</script>

<article class="center flex w-full flex-col items-center p-2 text-slate-800">
	<h1 class="text-4xl font-bold">{title}</h1>
	<div class="py-6">{date}</div>
	<div class="prose flex w-full flex-col items-center pb-20">{@html content}</div>
</article>
