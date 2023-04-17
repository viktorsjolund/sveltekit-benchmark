<script lang="ts">
	import people from '../../../data/big-data.json';
	export let data;
</script>

<div>
	<div class="flex flex-wrap justify-evenly">
		{#each people as person}
			<a href={data.pathname + '/' + person.id}>
				<div class="mt-2 flex w-48 rounded-md bg-slate-600 p-2">
					<span class="text-sm font-semibold">
						{person.first_name}
						{person.last_name}
					</span>
					<span class="ml-auto text-xs text-slate-400">{person.id}</span>
				</div>
			</a>
		{/each}
	</div>
</div>
