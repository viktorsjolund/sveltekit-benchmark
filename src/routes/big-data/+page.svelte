<script lang="ts">
	export let data;
</script>

<div class="w-full">
	<a href={data.pathname + '/people'}>
		<div class="flex w-full flex-col bg-slate-600 p-4">
			<h1 class="text-lg font-bold">People Big Data</h1>
			<p>A data collection of 1000 fake people</p>
		</div>
	</a>
</div>
