<script>
    let { grid = $bindable() } = $props();

    const size = grid.length;
</script>

<div
	class="grid [grid-template-columns:repeat(var(--size),minmax(0,1fr))] [grid-template-rows:repeat(var(--size),minmax(0,1fr))] bg-white"
	style="--size: {size};"
>
	{#each grid as row, r}
		{#each row as cell, c}
			<label class="[&:has(:checked)]:bg-red-300 w-20 h-20 border border-gray-200 cursor-pointer flex items-center justify-center hover:bg-blue-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 bg-white">
				<input
					type="checkbox"
					aria-label="셀 선택"
					class="sr-only"
					name="answer"
					value="{r},{c}"
					checked={!!grid[r][c]}
					onchange={e => grid[r][c] = e.target.checked ? 1 : 0}
				/>
			</label>
		{/each}
	{/each}
</div>
