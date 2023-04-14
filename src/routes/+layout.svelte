<script>
	import '../app.css';
</script>

<main
	class="flex h-screen flex-col items-center overflow-hidden bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300"
>
	<nav
		class="flex h-10 w-full shrink-0 grow-0 items-center justify-center border-b border-slate-600 bg-slate-700"
	>
		<div class="flex w-full gap-4 p-2 font-semibold md:max-w-2xl">
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
	<div
		class="flex w-full flex-grow justify-self-center overflow-y-auto overflow-x-clip bg-slate-200 shadow-xl scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-500 scrollbar-thumb-rounded-md md:max-w-2xl md:border-x md:border-slate-300"
	>
		<slot />
	</div>
</main>
