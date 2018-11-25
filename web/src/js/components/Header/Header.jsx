import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, NavList, NavItem } from './styles'

class Header extends PureComponent {
  render() {
    const { pathname } = this.props.location;

    const isHome = pathname === '/';
    const isSearch = pathname === '/search';

    return (
      <HeaderWrapper>
        <NavList>
          <NavItem active={isHome}>
            <Link to="/">Properties</Link>
          </NavItem>
          <NavItem active={isSearch}>
            <Link to="/page">Just Another Page</Link>
          </NavItem>
        </NavList>
      </HeaderWrapper>
    );
  }
}

export default Header;
