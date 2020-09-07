import styled from "styled-components";
import {Button, Image, Menu} from "semantic-ui-react";

export const StyledNavbarWrapper = styled(Menu)`
  &&& {
    padding: 0 71px 0 110px;
    background-color: #ffffff;
    height: 77px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    cursor: pointer;
  }
`;

export const StyledLogo = styled(Image)`
  &&& {
    width: 100px;
  }
`;

export const StyledNavItem = styled(Button)`
  &&& {
    margin: -5px !important;
    color: #000000;
    background-color: transparent;
    cursor: pointer;
    font-family: Karla;
    font-size: 16px !important;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    border-radius: 40px;
    &:hover {
      background: rgba(170, 180, 192, 0.1);
      border-radius: 40px;
    }
  }
`;