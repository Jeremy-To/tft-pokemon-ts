import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {
	signInWithGoogle,
	selectAuthStatus,
	selectIsAuthenticated,
} from '../../slices/authSlice';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const SignIn = () => {
   const navigate = useNavigate();
	const dispatch =
		useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
	const isAuthenticated = useSelector((state: any) =>
		selectIsAuthenticated(state)
	);
	const authStatus = useSelector((state: any) => selectAuthStatus(state));

	useEffect(() => {
		if (isAuthenticated) {
      navigate('/lobby');
		}
	}, [isAuthenticated]);

	const handleSignIn = () => {
		dispatch(signInWithGoogle());
	};

	return (
		<div>
			{authStatus === 'loading' && <div>Loading...</div>}
			{authStatus === 'failed' && <div>Failed to sign in.</div>}
			<button onClick={handleSignIn} disabled={authStatus === 'loading'}>
				Sign In with Google
			</button>
		</div>
	);
};

export default SignIn;
