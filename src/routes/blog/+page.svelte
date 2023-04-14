<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex w-full grow-0 flex-col gap-2 p-2 text-slate-700">
	{#if data.posts}
		{#each data.posts as post}
			<div class="flex flex-col gap-2 rounded-md border border-slate-300 bg-slate-200 p-3">
				<a class="font-bold" href="blog{post.slug}">{post.title}</a>
				<small>{post.description}</small>
				<small class="font-light">{post.date}</small>
			</div>
		{/each}
	{/if}
</div>
