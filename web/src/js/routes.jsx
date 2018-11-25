import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/app';
import { PageContainer, ContentWrapper } from './layouts/Default/styles'

const HeaderWithRouter = withRouter(props => <Header {...props} />);

module.exports = (
  <PageContainer>
    <HeaderWithRouter />
    <ContentWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Home} />
      </Switch>
    </ContentWrapper>
  </PageContainer>
);
