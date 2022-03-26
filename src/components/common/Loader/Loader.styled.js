import styled from 'styled-components';


export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Spinner = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
`;


export const SubSpinner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; 

  @keyframes spin {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
  }

  & div { box-sizing: border-box!important }
  & > div {
    position: absolute;
    width: 144px;
    height: 144px;
    top: 28px;
    left: 28px;
    border-radius: 50%;
    border: 16px solid #000;
    border-color: #a6192e transparent #a6192e transparent;
    animation: spin 1s linear infinite;
  }
  & > div:nth-child(2) { border-color: transparent }
  & > div:nth-child(2) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
  & > div:nth-child(2) div:before, & > div:nth-child(2) div:after { 
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: -16px;
    left: 48px;
    background: #a6192e;
    border-radius: 50%;
    box-shadow: 0 128px 0 0 #a6192e;
  }
  & > div:nth-child(2) div:after { 
    left: -16px;
    top: 48px;
    box-shadow: 128px 0 0 0 #a6192e;
  }

  & div { box-sizing: content-box; }
`;




