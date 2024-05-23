<script lang="ts">
	import { page } from '$app/stores';
	import type { RepoPayload } from '$lib/payloads/repo.payload';
	import GitDirectory from '$lib/components/GitDirectory.svelte';
	import {CodeBlock, ListBox, ListBoxItem} from '@skeletonlabs/skeleton';
	import {goto} from "$app/navigation";
	
	export let data: RepoPayload;
	let selectedBranch = $page.params.branch || data.branches[0];

	const handleBranchClick = (branch) => {
		selectedBranch = branch;
		goto(`/repositories/${$page.params.repo}/tree/${branch}`);
	};

</script>

<div class="card p-4">
	<header>
		<h3 class="h3">{$page.params.repo}</h3>
	</header>
	<h4>Branch:</h4>
	<ListBox bind:value={selectedBranch} multiple={false}>
		{#each data.branches as branch}
			<ListBoxItem bind:group={selectedBranch} name="branch" value={branch} on:click={() => handleBranchClick(branch)}>{branch}</ListBoxItem>
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
