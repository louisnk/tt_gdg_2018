import styled from 'styled-components';
import C from '../../utility/constants'

const {
	STYLE: {
		FONT_SIZE_SMALL,
		FONT_SIZE_MEDIUM,
		FONT_SIZE_LARGE,
		FONT_SIZE_XL,
	}
} = C;

const StyledP = styled.p`
	font-size: ${props => {
		switch (props.size) {
			case 'xl':
				return FONT_SIZE_XL;
			case 'large':
				return FONT_SIZE_LARGE;
			case 'small':
				return FONT_SIZE_SMALL;
			case 'medium':
				return FONT_SIZE_MEDIUM;
			default:
				return FONT_SIZE_MEDIUM;
		}
	}};
	color: ${props => (props.color ? props.color : '#111')};
	font-style: ${props => props.italic ? 'italic' : 'normal'};
	font-weight: ${props => props.bold
			? 'bold'
			: props.light
				? 'light'
				: 'regular'
			}
`;

export {
	StyledP
}
