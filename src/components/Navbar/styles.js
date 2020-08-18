import styled from "styled-components";
import { Button, Image, Menu } from "semantic-ui-react";

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

export const StyledNavItemsWrapper = styled.div`
  &&& {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const StyledLogo = styled(Image)`
  &&& {
    width: 100px;
    margin: 0px 0px 0px 100px;
  }
`;

export const StyledContactUsButton = styled(Button)`
  &&& {
    background-color: #4a607b;
    color: #ffffff;
    border: none;
    width: 118px;
    height: 42px;
    border-radius: 42px;
    margin: 0px 43px 0px 0px;
    cursor: pointer;
    font-size: 16px;
  }
`;
