<script>
	import '../app.css';
</script>

<main class="overflow-hidden flex items-center flex-col h-screen bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300">
	<nav class="flex w-full items-center shrink-0 grow-0 h-10 justify-center bg-slate-700 border-b border-slate-600">
		<div class="font-semibold flex gap-4 w-full p-2 md:max-w-2xl">
			<a href="/">
				<span>Home</span>
			</a>
			<a href="/blog">
				<span>Blog</span>
			</a>
			<a href="/big-data">
				<span>Big Data</span>
			</a>
		</div>
	</nav>
	<div class="overflow-y-auto scrollbar-thin scrollbar-thumb-slate-500 scrollbar-thumb-rounded-md scrollbar-track-slate-300 justify-self-center shadow-xl w-full flex flex-grow bg-slate-200 md:border-x md:border-slate-300 md:max-w-2xl">
		<slot />
	</div>
</main>
