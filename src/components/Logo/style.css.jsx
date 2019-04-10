import styled from 'styled-components';
import variables from 'Utils/variables.css';

const {
	colors: { appTitleColor },
	fonts: { Montserrat },
} = variables;

const LogoStyle = styled.a`
	color: ${appTitleColor};
	font: 400 1rem/1.2rem ${Montserrat};
	text-decoration: none;
	padding: 0 1.5rem;
`;

export default LogoStyle;
