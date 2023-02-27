import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';


const element = document.getElementById('root');
const root = createRoot(element!);
root.render(
	<React.StrictMode>
		<Provider store={store}>
      <App/>
		</Provider>
	</React.StrictMode>
);
