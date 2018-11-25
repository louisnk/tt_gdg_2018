import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PlainLink } from './styles'


class Link extends Component {
	render() {
		const { href, children } = this.props;
		return (
			<PlainLink {...this.props} href={href}>
				{children}
			</PlainLink>
		)
	}
}
export default Link;