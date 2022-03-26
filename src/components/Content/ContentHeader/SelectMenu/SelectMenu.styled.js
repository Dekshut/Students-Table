import styled, {css} from 'styled-components';

export const SelectMenuWrapper = styled.div`
  background-color: #c0c0c0;
`;

export const SelectMenuInner = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
`;

export const SelectMenuOptions = styled.div`
  display: flex;
`;

export const SelectMenuTitle = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
`;

export const SelectMenuCSV= styled.div`
  a{
    font-size: 12px;
    color: #fff;
    margin: 0 20px;

    path {
      fill: #fff;
    }
  }
`;

export const SelectMenuBtn = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: inherit;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg{
    margin-right: 10px;
  }

  ${props => props.darker && css`
    color: #424242;
  `}
`;


