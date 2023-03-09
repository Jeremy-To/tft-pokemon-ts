import { Provider } from 'react-redux';
import store from './store';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	return <Provider store={store}>{children}</Provider>;
};
