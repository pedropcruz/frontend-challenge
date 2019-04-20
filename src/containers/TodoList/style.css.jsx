import styled from 'styled-components';
import variables from 'Utils/variables.css';

const {
	colors: { whiteColor },
} = variables;

const TodoListStyles = styled.ul`
	list-style: none;
	background: ${whiteColor};
	padding: 0;
`;

export default TodoListStyles;
