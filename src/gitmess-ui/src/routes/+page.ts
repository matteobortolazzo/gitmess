import { getRepositories } from "$lib/api";
import type { IndexPayload } from "$lib/payloads/index.payload";

/** @type {import('./$types').PageLoad} */
export async function load(): Promise<IndexPayload> {
	const repositories = await getRepositories();
	return {
		repositories
	};
}
