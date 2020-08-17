import styled from "styled-components";
import {Button, Image, Menu} from "semantic-ui-react";

// Styles for the Navbar wrapper
export const StyledNavbarWrapper = styled(Menu)`
  &&& {
    background-color: #ffffff;
    height: 74px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

// Styles for the logo wrapper
export const StyledLogoWrapper = styled.div`
  &&& {
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }
`;

// Styles for the logo
export const StyledLogo = styled(Image)`
  &&& {
    width: 100px;
    margin: 0px 0px 0px 100px;
  }
`;

// Styles for the NavItem wrapper
export const StyledNavItemsWrapper = styled.div`
  &&& {
    display: flex;
    justify-content: flex-end;
    margin: 0px 71px 0px 0px;
  }
`;

// Styles for the "Contact Us" button
export const StyledContactUsButton = styled(Button)`
  &&& {
    background-color: #4A607B;
    color: #ffffff;
    border: none;
    width: 118px;
    height: 42px;
    border-radius: 42px;
    cursor: pointer;
    font-weight: normal;
    font-family: Karla;
  }
`;