import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'Redux/store';

import GlobalStyles from 'Utils/globalStyles.css';

import NavBar from 'Containers/Navbar';
import TodoList from 'Containers/TodoList';
import AddTodo from 'Containers/AddTodo';

const store = configureStore();

const root = document.getElementById('root');

const App = () => {
	return (
		<>
			<GlobalStyles />
			<NavBar />
			<div className="wrapper">
				<TodoList />
				<AddTodo />
			</div>
		</>
	);
};

function renderApp() {
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		root,
	);
}

renderApp();

if (module.hot) {
	module.hot.accept(renderApp);
}
