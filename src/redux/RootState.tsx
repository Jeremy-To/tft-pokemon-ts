export interface RootState {
	pokemon: {
		myPkmId: number | null;
		enemyPkmId: number | null;
		id: number;
		name: string;
		totalStats?: number;
	};
}
