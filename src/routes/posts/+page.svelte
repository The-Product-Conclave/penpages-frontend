<script>
	export let data;
</script>

<a href="/" class="text-sm underline font-raleway block text-blue px-5 pt-2">
	Back Home
</a>

<section class="grid gap-5 p-5 font-raleway">
	{#each data.posts as post (post.id)}
		<div class="shadow-lg p-5 max-w-[45rem] rounded-lg">
			<h2 class="mb-2">
				<a
					href="/posts/{post.id}"
					class="text-lg text-blue-800 font-bold hover:underline"
					>{post.title}</a
				>
			</h2>
			<p class="text-sm">{post.body}</p>
		</div>
	{/each}
</section>
