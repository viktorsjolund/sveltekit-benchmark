<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<div class="flex flex-wrap justify-evenly">
		{#if data.people}
			{#each data.people as person}
				<div class="flex flex-col rounded-md bg-slate-600 p-4 mt-2 w-72">
					<h1>
						{person.first_name}
						{person.last_name}
					</h1>
					<span>{person.email}</span>
					<span>{person.gender}</span>
				</div>
			{/each}
		{/if}
	</div>
</div>
