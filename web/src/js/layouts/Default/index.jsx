import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

// import { Header } from '../../components/Header';

import { PageContainer, ContentWrapper } from './styles'


// const HeaderWithRouter = withRouter(props => <Header {...props} />);

class DefaultLayout extends Component {
	render() {
		const { Header, Content } = this.props;

		return (
			<PageContainer>
				<Header />
				<ContentWrapper>
					<Content />
				</ContentWrapper>
			</PageContainer>
		);
	}
};

export default DefaultLayout;