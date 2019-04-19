import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'Redux/reducers';

import GlobalStyles from 'Utils/globalStyles.css';

import NavBar from 'Containers/Navbar';
import TodoItem from 'Containers/TodoItem';
import AddTodo from 'Containers/AddTodo';

const store = createStore(rootReducer);

const root = document.getElementById('root');

const App = () => {
	return (
		<>
			<GlobalStyles />
			<NavBar />
			<div className="wrapper">
				<TodoItem />
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
