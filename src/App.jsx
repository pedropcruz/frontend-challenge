import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from 'Utils/globalStyles.css';

import NavBar from 'Containers/Navbar';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<NavBar />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
