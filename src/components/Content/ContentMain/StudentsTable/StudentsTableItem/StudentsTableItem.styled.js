import styled, { css } from 'styled-components';

export const RowWrapper = styled.tr`
  box-shadow: 0px 1px 4px rgba(60, 52, 135, 0.15); 
  background-color: #fff;
  cursor: pointer;

  th:nth-child(8) {
    padding-left: 70px;
    width: 50px;
  }

  ${props => props.selectActivated && css`
    th:nth-child(8) {
      padding-left: 0;
      padding-right: 26px;
      width: 120px;
    }
  `}

  ${props => (props.darker % 2 === 0) && css`
    background-color: #f9f9f9;
  `}
  
  ${props => props.selected && css`
    background-color: #f2f2f2;
    border: 1px solid #C0C0C0;

    th:nth-child(8) {
      padding-left: 0;
      padding-right: 26px;
      width: 120px;

      div{
        justify-content: flex-end;
      }
    }
  `}

  ${props => props.disabled && css`
    cursor: default;
  `}

  & th:nth-child(5){
    ${props => props.colorScore && !props.disabled && css`
      color: ${props.colorScore};
    `}
  }

  & th:nth-child(6){
    ${props => props.colorSpeed && !props.disabled && css`
      color: ${props.colorSpeed};
    `}
  }

  & th:nth-child(7){
    display: flex;
  }

`;

export const Dropdown = styled.tr`
  width: 100%;
  background-color: #f2f2f2;
  padding: 0;
  position: relative;
  z-index: -2;
`;

export const DropdownInner = styled.div`
  padding-left: 40px;
  padding-right: 175px;
  padding-bottom: 25px;
`;

export const DropdownHeader = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;

  div:nth-child(1){
    margin-right: 15px;
  }

  span{
    text-transform: uppercase;
    font-weight: 700;
    color: #5B5B5B;
    margin-left: 3px;
  }
`;

export const DropdownOptions = styled.div`
  display: flex;
  padding: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid #A6192E;

  & > div{
    border: 1px solid #C0C0C0;
    padding: 6px 12px;
    background-color: #fff;
    font-weight: 700;
    color: #5B5B5B;
    margin-right: 16px;
  }

  path{
    fill: #5B5B5B;
  }
`;

export const DateInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #c0c0c0;
  width: 200px;
  color: #c0c0c0; 
  cursor: pointer;

  &::-webkit-calendar-picker-indicator {
    opacity: 40%;
  }
`;

export const ReloadBtn = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin-left: 192px;
  cursor: pointer;

  path{
    fill: #c0c0c0;
  }
`;

export const Statistics = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

export const StatisticsTitle = styled.div`
  margin-right: 25px;
  font-size: 12px;
`;

export const ColoredCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;

  ${props => props.color && css`
      background-color: ${props.color};
  `}

`;

export const ColoredText = styled.div`
  margin-right: 25px;
  font-size: 12px;

  ${props => props.color && css`
      color: ${props.color};
  `}
`;

export const DropdownTable = styled.table`
  width: 1078px;
  margin-top: 8px;
  border-bottom: 1px solid #A6192E;

  thead tr th{
    padding-bottom: 10px;
  }

  tr th:nth-child(1) {
    width: 34px;  
    padding: 0;
  }

  tr th:nth-child(2) {
    padding: 0;
    width: 310px;
  }


  tr th:nth-child(3) {
    width: 60px;
    padding: 0;
  }

  tr th:nth-child(4) {
    width: 125px;
    padding: 0;
  }

  tr th:nth-child(5) {
    width: 80px;
    padding: 0;
  }

  thead tr th:nth-child(6) {
    width: 130px;
    padding: 0;
  }

  tr th:nth-child(7) {
    width: 145px;
    padding: 0;
  }

  thead tr th:nth-child(8) {
    /* display: block; */
    padding: 0;

    button{
      width: 110px;
    }
  }

  tbody th:nth-child(8) {
    padding: 0;
  }


  th:nth-child(9) {
    text-align: center;
  }

  tbody tr th{
    font-size: 16px;
    padding-bottom: 12px;
  }
`;

export const TotalData = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  div{
    font-weight: 700;
  }

  & div:nth-child(1){
    margin-left: 34px;
    margin-right: 245px;
  }

  & div:nth-child(2){
    ${props => props.colorScore && css`
      color: ${props.colorScore};
    `}
  }

  & div:nth-child(3){
    margin-left: 60px;
    max-width: 87px;

    ${props => props.colorSpeed && css`
      color: ${props.colorSpeed};
    `}
  }
`;

export const SelectBtnWrapper = styled.div`
  display: flex;

  & button:nth-child(1){
    margin-right: 8px;
  }
`;

export const SelectBtn = styled.button`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
  border: none;
  cursor: pointer;
`;

export const OptionsScope = styled.div`
  display: flex;
  align-items: center;

  ${props => (props.selectActivated) && css`
    justify-content: flex-end;
  `}
`;







