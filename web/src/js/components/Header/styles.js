import styled from 'styled-components';

import C from '../../utility/constants'


const HeaderWrapper = styled.div`
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
	height: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: #a00;
`;

const NavList = styled.ul`
	list-style: none;
`;

const NavItem = styled.li`
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
	HeaderWrapper,
	NavList,
	NavItem
}
