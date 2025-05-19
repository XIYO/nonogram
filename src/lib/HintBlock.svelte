<script>
	const { data = [[]] } = $props();
	const rows = data.length;
	const cols = data[0]?.length ?? 0;
</script>

{#each data as clues}
    {#each clues as clue}
	    <div class="content-center text-center m-1">
			{clue}
        </div>
    {/each}
{/each}