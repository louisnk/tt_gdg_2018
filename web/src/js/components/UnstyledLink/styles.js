import styled from 'styled-components';

export const PlainLink = styled.a`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	padding: 1rem;
	font-size: 1.4rem;
	border: none;
	text-decoration: none;

	&:hover, &:focus {
		box-shadow: 0 0 0.4rem rgba(100,120,255,0.5);
	}
`;