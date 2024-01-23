/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch("https://dummyjson.com/posts");
	const { posts } = await res.json();

	return { posts };
}
