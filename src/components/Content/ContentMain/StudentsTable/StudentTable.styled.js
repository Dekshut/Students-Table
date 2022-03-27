import styled from 'styled-components';

export const CustomTable = styled.table`
  border-bottom: 1px solid #C0C0C0;;

  th:nth-child(1) {
    width: 12px;
    padding: 0px 26px 0px 23px;
  }

  th:nth-child(2) {
    padding: 14px 0;
    width: 285px;
    padding-right: 25px;

    div{
      display: flex;
      justify-content: space-between;
    }
  }


  th:nth-child(3) {
    width: 120px;
  }

  th:nth-child(4) {
    width: 65px;
  }

  th:nth-child(5) {
    width: 95px;
    padding-right: 30px;
  }

  thead th:nth-child(6) {
    width: 105px;
    padding-right: 30px;
  }

  th:nth-child(6) {
    width: 135px;
  }

  th:nth-child(7) {
    width: 440px;
  }

  th:nth-child(8) {
    width: 50px;
  }

  thead th:nth-child(8) {
    padding-left: 25px;
  }

  th {
    text-align: start;
    font-size: 14px;
    line-height: 140%;
  }
`;

export const alertTh = styled.th`
  background-color: pink;
  font-weight: 700;
`;

export const ErrorMessage = styled.div`
  font-size: 32px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #A6192E;
`;

