import React, { Fragment as F } from 'react';

import { HiddenInput, StyledCheckbox } from './styles'

const Checkbox = ({ input }) => (
	<F>
		<HiddenInput type='checkbox' id={input.name}/>
		<StyledCheckbox htmlFor={input.name} onClick={() => input.onChange(true)}/>
	</F>
)

export default Checkbox;