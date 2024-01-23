/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const postRes = await fetch(`https://dummyjson.com/posts/${params.post_id}`);
	const post = await postRes.json();

	const commentRes = await fetch("https://dummyjson.com/comments?limit=10");
	const { comments } = await commentRes.json();

	post.comments = comments;
	console.log(post);

	return { post };
}
