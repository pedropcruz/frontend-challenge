import styled from 'styled-components';
import variables from 'Utils/variables.css';

const {
	colors: { whiteColor },
} = variables;

const NavBarStyles = styled.nav`
	background-color: ${whiteColor};
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
	height: 4.4rem;
	margin-bottom: 1.5rem;
	display: flex;
	align-items: center;
	.navbar {
		position: relative;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0.5rem 1rem;
	}
`;

export default NavBarStyles;
