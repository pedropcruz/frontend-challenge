import { createGlobalStyle } from 'styled-components';
import variables from './variables.css';

import 'AssetsFonts/transcriptions-icons/style.css';

const {
	colors: { backgroundColor },
	fonts: { OpenSans },
} = variables;

const GlobalStyle = createGlobalStyle`
	html, body{
		background-color: ${backgroundColor};
		font-family: ${OpenSans}, sans-serif;
	}

	body{
		margin: 0;
		padding: 0;
	}

	:focus{
		outline: 0;
	}

	a{
		&:focus,
		&:active,
		&:hover{
			outline: 0;
		}
	}

	.wrapper {
		margin-right: auto;
		margin-left: auto;
		width: 100%;
		max-width: 960px;
		padding-right: 16px;
		padding-left: 16px;
	}
`;

export default GlobalStyle;
