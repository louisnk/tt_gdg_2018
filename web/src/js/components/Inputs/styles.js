import styled from 'styled-components';

export const HiddenInput = styled.input`
	position: absolute;
	opacity: 0;


	&:hover + label:before {
		background: #fca272;
	}

	&:focus + label:before {
		box-shadow: 0 0 0 0.3rem rgba(0,0,200,0.2);
	}

	&:checked + label:before {
		background: #f35249;
	}

	&:disabled + label {
		cursor: auto;
	}

	&:disabled + label:before {
		background: #ddd;
		box-shadow: none;
	}

	&:checked + label:after {
		content: '';
    position: absolute;
    left: 0.5rem;
    top: 1rem;
    background: white;
    width: 4px;
    height: 4px;
    box-shadow:
      2px 0 0 white,
      4px 0 0 white,
      4px -2px 0 white,
      4px -4px 0 white,
      4px -6px 0 white,
      4px -8px 0 white;
    transform: rotate(45deg);
	}
`;

export const StyledCheckbox = styled.label`
	position: relative;
	cursor: pointer;
	padding: 0;

	&:before {
		content: '';
		display: inline-block;
		vertical-align: text-top;
		border-radius: 1rem;
		width: 2rem;
		height: 2rem;
		background: #fff;
	}
`;
