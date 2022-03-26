import styled from "styled-components";

export const DropDownContainer = styled("div")`
  position: relative;
`;

export const DropDownHeader = styled("div")`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  
`;

export const DropDownList = styled("ul")`
  &:first-child {
    padding-top: 5px;
  }
`;

export const ListItem = styled("li")`
  cursor: pointer;
`;