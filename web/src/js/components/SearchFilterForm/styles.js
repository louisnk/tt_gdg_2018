import styled from 'styled-components';

import C from '../../utility/constants'


const FormWrapper = styled.form`
	background-color: #03a;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const LabeledField = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Label = styled.label`
	font-weight: 900;
	color: #0f0;
	font-size: 1.4rem;
`;

const Select = styled.li`
	float: left;
  margin-right: 10px;
  font-size: 15px;
  cursor: pointer;

  &.active:hover {
    border-bottom: 2px solid #721c24;
  }

  &:hover {
  	border-bottom: 2px solid #0a0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export {
	FormWrapper,
	LabeledField,
	Label,
	Select
}
