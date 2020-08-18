import styled from "styled-components";
import {Menu} from "semantic-ui-react";

// Styles for NavItem
export const StyledNavItem = styled(Menu.Item)`
  &&& {
    color: #000000 !important;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    line-height: 19px;
    padding: 0px 43px 0px 0px !important;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    &:last-child {
    padding: 0px 31px 0px 0px !important;
    }
  }
`;