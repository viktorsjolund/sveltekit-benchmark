<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex h-max w-full flex-col gap-3 bg-slate-600 p-4">
	<span
		><span class="rounded-md bg-slate-500 p-1 font-semibold text-slate-800">Full Name</span>
		{data.person.first_name}
		{data.person.last_name}</span
	>
	<span
		><span class="rounded-md bg-slate-500 p-1 font-semibold text-slate-800">Email</span>
		{data.person.email}</span
	>
	<span
		><span class="rounded-md bg-slate-500 p-1 font-semibold text-slate-800">Gender</span>
		{data.person.gender}</span
	>
</div>
