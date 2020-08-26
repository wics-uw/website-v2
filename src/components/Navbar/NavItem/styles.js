import styled from "styled-components";
import {Button} from "semantic-ui-react";

// Styles for NavItem
export const StyledNavItem = styled(Button)`
  &&& {
    color: #000000 !important;
    background: transparent;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    line-height: 2.5 !important;
    width: 118px;
    height: 42px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    border-radius: 42px;
    &:last-child {
      margin-right: 71px;
    }
    &:hover {
      background-color: #4A607B;
      color: #ffffff !important;
    }
  }
`;