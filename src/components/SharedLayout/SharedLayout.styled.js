import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  height: 65px;
  background-color: #198d8d;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  padding: 10px 20px;
`;

export const Navigation = styled.nav`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const NavItem = styled(NavLink)`
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  transition: transform 250ms linear;

  &.active {
    color: black;
    border-bottom: 4px solid black;
  }

  &:not(.active):hover {
    transform: scale(1.1);
  }
`;
