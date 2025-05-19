// SvelteKit 유니버설 load 함수에서 퍼즐 데이터 전달 (데모용)

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	// 실제 서비스라면 params.id로 DB 조회 등 가능
	const size = 5;
	const colClues = [
		[1, 3, 5, 1, ''],
        [1, 1, 1, 1, 0]
	];
	const rowClues = [
		['', 1, 2],
		['', '', 3],
		['', '', 5],
        ['', 1, 1],
        [1, 1, 1]
	];

	return {
		id: params.id,
		size,
		rowClues,
		colClues
	};
}
