<script>
	export let data;
</script>

<a href="/posts" class="text-sm underline font-raleway block text-blue p-5">
	Back to Posts
</a>

<section class="px-5 font-raleway">
	<h1 class="text-2xl font-bold mb-2">{data.post.title}</h1>
	<p class="font-light max-w-[55rem] mb-2">{data.post.body}</p>

	<p class="mb-2">
		<span class="font-semibold">tags:</span>
		{#each data.post.tags as tag (tag)}
			<span class="bg-gray-50 text-sm p-1">{tag}</span>
		{/each}
	</p>

	<hr />
	<p>Comments ({data.post.comments.length})</p>
	<!-- Comments -->
	<div>
		{#each data.post.comments as comment (comment.id)}
			<article class="comment">
				<small>@{comment?.user.username}</small>
				<p>{comment.body}</p>
			</article>
		{/each}
	</div>
</section>

<style>
	.comment {
		background-color: rgb(245, 245, 245);
		padding: 0.4em;
		margin-bottom: 1em;
		box-shadow: 2px 2px 7px silver;
	}
</style>
