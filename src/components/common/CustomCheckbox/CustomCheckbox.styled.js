import styled from 'styled-components';
import bg from './CheckedIcon.svg'

export const CheckboxLabel = styled.label`
  position: relative;
`;

export const CheckboxInput = styled.input`
  display: none;

  &:checked + span {
    border-color: #323232;
    background-color: #cdcdcd;
    background-image: url(${bg});
    background-position: center center;
    background-size: 80%;
    background-repeat: no-repeat;
  }
`;

export const CheckboxSpan = styled.span`
  position: absolute;
  transform: translate(0%, -90%);
  height: 8px;
  width: 8px;
  border: 2px solid #777;
  border-radius: 2px;
  cursor: pointer;
`;