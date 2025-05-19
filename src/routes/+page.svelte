<script>
// 퍼즐 20개 더미 리스트
const puzzles = Array.from({ length: 20 }, (_, i) => i + 1);
</script>

<div class="flex flex-col items-center py-8">
	<h1 class="text-2xl font-bold mb-6">Nonogram Puzzle List</h1>
	<div class="grid grid-cols-3 gap-4 w-full max-w-2xl">
		{#each puzzles as id (id)}
			<a
				href="/{id}/"
				class="block px-4 py-8 rounded bg-gray-100 hover:bg-blue-100 text-blue-700 font-medium text-center shadow transition-colors duration-100"
			>
				퍼즐 {id}
			</a>
		{/each}
	</div>
</div>
