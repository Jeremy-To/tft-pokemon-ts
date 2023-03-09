import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import Game from './pages/Game';
import Fight from './pages/Fight';
import { AuthProvider } from './authProvider';

function App(): JSX.Element {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/lobby" element={<Lobby />} />
						<Route path="/game" element={<Game />} />
						<Route path="/fight" element={<Fight />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
