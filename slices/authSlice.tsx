import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../src/store';
import { auth, provider } from '../src/firebase-config';
import { signOut, signInWithPopup, UserCredential } from 'firebase/auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
interface RootState {
	auth: AuthState;
}
interface AuthState {
	isAuthenticated: boolean;
	authError: string | null;
	authStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: AuthState = {
	isAuthenticated: false,
	authError: null,
	authStatus: 'idle',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
			state.isAuthenticated = action.payload;
		},
		setAuthError: (state, action: PayloadAction<string | null>) => {
			state.authError = action.payload;
		},
		setAuthStatus: (
			state,
			action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>
		) => {
			state.authStatus = action.payload;
		},
	},
});
export const signInWithGoogle = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(setAuthStatus('loading'));
		const result: UserCredential = await signInWithPopup(auth, provider);
		cookies.set('auth-token', result.user?.refreshToken);
		dispatch(setIsAuthenticated(true));
		dispatch(setAuthError(null));
		dispatch(setAuthStatus('succeeded'));
	} catch (err: any) {
		console.error(err);
		dispatch(setAuthError(err.message));
		dispatch(setAuthStatus('failed'));
	}
};

export const signOutUser = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(setAuthStatus('loading'));
		await signOut(auth);
		cookies.remove('auth-token');
		dispatch(setIsAuthenticated(false));
		dispatch(setAuthError(null));
		dispatch(setAuthStatus('succeeded'));
	} catch (err: any) {
		console.error(err);
		dispatch(setAuthError(err.message));
		dispatch(setAuthStatus('failed'));
	}
};

export const selectIsAuthenticated = (state: RootState) =>
	state.auth.isAuthenticated;
export const selectAuthError = (state: RootState) => state.auth.authError;
export const selectAuthStatus = (state: RootState) => state.auth.authStatus;


export const { setIsAuthenticated, setAuthError, setAuthStatus } =
	authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
