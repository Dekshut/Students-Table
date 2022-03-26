import styled, { css } from 'styled-components';

export const NavLink = styled.a`
  margin: 0 20px;
  cursor: pointer;

  ${props => props.active && css`
    font-weight: 700;
    background-color: #A6192E;
    color: #fff;
    padding: 6px 12px;
  `}
`;

export const NavWrapper = styled.div`
  margin-left: 65px;
  margin-right: 290px;
`;
