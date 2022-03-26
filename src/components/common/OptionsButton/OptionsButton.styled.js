import styled, { css } from 'styled-components';

export const ButtonInner = styled.button`
  width: 10px;
  height: 5px;  
  margin-left: 10px;
  cursor: pointer;
  padding: 0;
  display: flex;
  border: none;
  background: transparent;
  position: relative;

  ${props => props.active && css`
      transform: rotateZ(180deg);
  `}

  path {
    fill: #777777;

    ${props => props.lighter && css`
      fill: #c0c0c0;
    `}

    ${props => props.active && css`
      fill: #777;
    `}
  }

`;