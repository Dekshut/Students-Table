import styled, {css} from 'styled-components';

export const SortBtnWrapper = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  color: inherit;
  text-align: start;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

export const SortBtnAngles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  line-height: 100%;
  color: #c0c0c0;
  font-size: 10px;

  ${props => !props.pointer && css`
    display: none;
  `}

  ${props => props.dir !== 0 && css`
    color: #5b5b5b;
  `}
`;

export const SortBtnUp = styled.div`
  width: 12px;
  height: 6px;
  position: relative;

  &::after{
    content: '';
    width: 3px;
    height: 1px;
    background-color: #c0c0c0;
    position: absolute;
    left: 6px;
    top: 2px;
    transform: rotateZ(45deg);
  }

  &::before{
    content: '';
    width: 3px;
    height: 1px;
    background-color: #c0c0c0;
    position: absolute;
    left: 4px;
    top: 2px;
    transform: rotateZ(-45deg);
  }

  ${props => props.dir === 1 && css`
    &::after,
    &::before{
      background-color: #5b5b5b;
    }
  `}
`;

export const SortBtnDown = styled.div`
  width: 12px;
  height: 6px;
  position: relative;


  &::after{
    content: '';
    width: 3px;
    height: 1px;
    background-color: #c0c0c0;
    position: absolute;
    left: 4px;
    bottom: 2px;
    transform: rotateZ(45deg);
  }

  &::before{
    content: '';
    width: 3px;
    height: 1px;
    background-color: #c0c0c0;
    position: absolute;
    left: 6px;
    bottom: 2px;
    transform: rotateZ(-45deg);
  }

  ${props => props.dir === -1 && css`
    &::after,
    &::before{
      background-color: #5b5b5b;
    }
  `}
`;

