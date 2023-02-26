import './index.css';

import {ThemeProvider, createTheme} from '@mui/material';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const theme = createTheme({
	//https://coolors.co/fbeef2-f78da7-c5adcf-8ed1fc-0a121f
	palette: {
		primary: {
			main: '#8ED1FC',
			dark: '#0a121f',
		},
		secondary: {
			main: '#F78DA7',
			light: '#fbeef2',
			contrastText: '#0a121f',
		},
		info: {
			main: '#c5adcf',
			contrastText: '#0a121f',
		},
	},
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
);
