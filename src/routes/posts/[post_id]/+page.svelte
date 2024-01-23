<script>
	export let data;
</script>

<main>
	<a href="/posts" style="display:block;margin-bottom:20px;">Back to posts</a>

	<section>
		<h1>{data.post.title}</h1>
		<p>{data.post.body}</p>

		<p>tags: {data.post.tags}</p>

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
</main>

<style>
	.comment {
		background-color: rgb(245, 245, 245);
		padding: 0.4em;
		margin-bottom: 1em;
		box-shadow: 2px 2px 7px silver;
	}
</style>
