<script lang="ts">
	import { page } from '$app/stores';
	import type { RepoPayload } from '$lib/payloads/repo.payload';
	import GitDirectory from '$lib/components/GitDirectory.svelte';
	import {CodeBlock, ListBox, ListBoxItem} from '@skeletonlabs/skeleton';
	import {getBranches} from "$lib/api";
	
	export let data: RepoPayload;

	const branches = async () => {
		return await getBranches(
			$page.params.repo,
		);
	};
	console.log(branches);
</script>

<div class="card p-4">
	<header>
		<h3 class="h3">{$page.params.repo}</h3>
	</header>
	<ListBox>
		{#each branches as branch}
			<ListBoxItem value={branch}>{branch}</ListBoxItem>
		{/each}
	</ListBox>

	<article class="mt-4">
		{#if data.response.tree}
			<GitDirectory url={$page.url.toString()} tree={data.response.tree} />
		{/if}
		{#if data.response.content}
			<CodeBlock language="ts" code={data.response.content}></CodeBlock>
		{/if}
	</article>
</div>
