import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
	difficultyLevel: number | null;
	myPkmId: number | null;
	enemyPkmId: number | null;
}

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState: {
		difficultyLevel: null,
		myPkmId: null,
		enemyPkmId: null,
	} as PokemonState,
	reducers: {
		setDifficultyLevel: (state, action: PayloadAction<number>) => {
			state.difficultyLevel = action.payload;
		},
		setMyPkmId: (state, action: PayloadAction<number | null>) => {
			state.myPkmId = action.payload;
		},
		setEnemyPkmId: (state, action: PayloadAction<number | null>) => {
			state.enemyPkmId = action.payload;
		},
	},
});

export const { setDifficultyLevel, setMyPkmId, setEnemyPkmId } =
	pokemonSlice.actions;

export default pokemonSlice.reducer;
