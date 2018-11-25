import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PlainButton } from './styles'


class Button extends Component {
	render() {
		return (
			<PlainButton {...this.props} />
		)
	}
}
export default Button;