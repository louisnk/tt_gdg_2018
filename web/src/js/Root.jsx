import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 59px;
`;

export default class Root extends Component {
  get content() {
    return (
      <Router>
        {this.props.routes}
      </Router>
    );
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Wrapper>
          {this.content}
        </Wrapper>
      </Provider>
    );
  }
}

Root.propTypes = {
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
};
