import styled from "styled-components";
import {Button, Container, Grid, GridRow, Image, Menu} from "semantic-ui-react";

export const StyledNavbarWrapper = styled(Menu)`
  &&& {
    background-color: #ffffff;
    height: 77px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    cursor: pointer;
    @media only screen and (max-width: 425px) {
      height: ${props => props.open ? "100%" : "67px"};
      flex-flow: ${props => props.open ? "row wrap" : "none"};
      align-content: center;
    }
  }
`;

export const StyledContainer = styled(Container)`
  &&& {
    width: 1300px;
    @media only screen and (max-width: 425px) {
      height: 67px;
      padding: 0 16px;
      position: ${props => props.open ? "absolute" : "auto"};
      top: ${props => props.open ? "0" : "auto"};
    }
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
    @media only screen and (max-width: 425px) {
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`;

export const StyledMobileMenuGrid = styled(Grid)`
  &&& {
    justify-content: center;
  }
`;

export const StyledMobileMenuGridRow = styled(GridRow)`
  &&& {
    padding: 0 !important;
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;