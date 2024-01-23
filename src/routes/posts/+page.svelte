<script>
	export let data;
</script>

<main>
	{#each data.posts as post (post.id)}
		<div>
			<h2><a href="/posts/{post.id}">{post.title}</a></h2>
			<p>{post.body}</p>
		</div>
	{/each}
</main>
