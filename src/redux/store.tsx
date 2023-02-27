import { configureStore, combineReducers } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';

const rootReducer = combineReducers({
	pokemon: pokemonReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
