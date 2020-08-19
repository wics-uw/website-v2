import styled from "styled-components";
import { Link } from "react-scroll";

// Styles for NavItem
export const StyledNavItem = styled(Link)`
  &&& {
    color: #000000 !important;
    background: transparent;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    line-height: 2.5;
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
      background-color: #4a607b;
      color: #ffffff !important;
    }
  }
`;
