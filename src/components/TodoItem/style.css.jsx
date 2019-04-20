import styled from 'styled-components';
import variables from 'Utils/variables.css';

const {
	colors: { whiteColor, borderColor, purpleColor, blackColor, grayColor },
	fonts: { Montserrat, OpenSans },
} = variables;

const ItemStyle = styled.li`
	padding: 1.5rem;
	border-top: 1px solid ${borderColor};
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	&:first-of-type {
		border: 0;
	}
	&:hover {
		button {
			display: block;
		}
	}
	.todolist {
		&-header {
			display: flex;
			align-items: center;
			flex: 0 0 97%;
			> * {
				margin: 0;
				padding: 0 0.5rem;
			}
			input[type='checkbox'] {
				appearance: none;
				padding: 0;
				display: block;
				width: 16px;
				height: 16px;
				margin-right: 0.5rem;
				border: 2px solid ${purpleColor};
				border-radius: 2px;
				&:checked {
					background: ${purpleColor};
					&:before {
						color: ${whiteColor};
						content: '\\e909';
						font-family: 'transcriptions';
						font-size: 0.5rem;
						padding: 0.1rem;
						display: inline-block;
						vertical-align: bottom;
					}
				}
				&:hover {
					cursor: pointer;
				}
			}
			h3 {
				font: 500 1rem/1rem ${Montserrat};
				padding: 0;
				font-size: 1rem;
				margin: 0;
				color: ${blackColor};
			}
			label span {
				font-size: 1.625rem;
			}
		}
		&-delete {
			display: none;
			padding: 0;
			i {
				font-size: 1.25rem;
			}
		}
		&-desc {
			color: ${grayColor};
			flex-basis: 100%;
			margin: 0.5rem 1rem 0.5rem 4.125rem;
			font: 400 1rem/1.4rem ${OpenSans};
		}
	}
`;

export default ItemStyle;
