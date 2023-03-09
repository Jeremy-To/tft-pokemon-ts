import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './../slices/authSlice';
import pokemonReducer from './../slices/pokemonSlice';

const rootReducer = combineReducers({
	auth: authReducer,
	pokemon: pokemonReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
