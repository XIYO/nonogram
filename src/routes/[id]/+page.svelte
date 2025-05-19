<script>
	import PuzzleGrid from '$lib/PuzzleGrid.svelte';
	import HintBlock from '$lib/HintBlock.svelte';

	const { data } = $props();
	const { id, size, rowClues, colClues } = data;

	let grid = $state(Array(size).fill(null).map(() => Array(size).fill(0)));
</script>

<form class="flex flex-col items-center py-8 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
	<h1 class="text-2xl font-extrabold mb-2 tracking-tight text-indigo-700 drop-shadow">Nonogram #{id}</h1>
	<p class="mb-8 text-gray-500">도전! 아래 퍼즐을 완성해보세요.</p>
	<!-- 전체 퍼즐+힌트 영역을 하나의 grid로 구성 -->
	<div class="grid [grid-template-columns:auto_1fr] [grid-template-rows:auto_1fr]">
		<!-- 좌상단 빈칸 (투명) -->
		<div>
			<!-- 빈칸 -->
		</div>

		<!-- 열 힌트 (상단, 투명 배경) -->
		<div
			class="grid [grid-template-columns:repeat(var(--cols),minmax(0,1fr))] [grid-template-rows:repeat(var(--rows),minmax(0,1fr))] p-2"
			style="--cols: {colClues[0].length}; --rows: {colClues.length};"
		>
			<HintBlock data={colClues} />
		</div>

		<!-- 행 힌트 (좌측, 투명 배경) -->
		<div
			class="grid [grid-template-columns:repeat(var(--cols),minmax(0,1fr))] [grid-template-rows:repeat(var(--rows),minmax(0,1fr))] p-2"
			style="--cols: {rowClues[0].length}; --rows: {rowClues.length};"
		>
			<HintBlock data={rowClues} />
		</div>

		<!-- 퍼즐 그리드 셀 (흰색 배경, 클릭/호버/포커스 스타일) -->
		<PuzzleGrid {grid} />
	</div>

	<button
		class="block w-full m-8 px-4 py-2 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
		onclick={() => {
                alert('퍼즐 제출!');
            }}
		type="submit"
	>
		제출
	</button>
</form>
