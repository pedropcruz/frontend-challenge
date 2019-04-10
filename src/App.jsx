import React from 'react';
import { render } from 'react-dom';

import GlobalStyles from 'Utils/globalStyles.css';

import NavBar from 'Containers/Navbar';

const root = document.getElementById('root');

const App = () => {
	return (
		<>
			<GlobalStyles />
			<NavBar />
		</>
	);
};

function renderApp() {
	render(<App />, root);
}

renderApp();

if (module.hot) {
	module.hot.accept(renderApp);
}
