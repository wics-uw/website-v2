import styled from "styled-components";
import { Image, Grid } from "semantic-ui-react";

export const StyledText = styled.body`
  &&& {
    font-size: 16px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    height: auto;
    background: transparent;
    color: #ffffff;
  }
`;

export const StyledFooterWrapper = styled.div`
  &&& {
    text-align: center;
    margin-top: 50px;
    height: 502px;
    padding: 85px 370px 97px 370px;
    color: white;
    background-color: #49657f;
    font-family: Karla;
  }
`;

export const StyledEmail = styled.body`
  &&& {
    margin-top: 16px;
    font-style: normal;
    font-weight: normal;
    line-height: 30px;
    font-size: 26px;
    text-align: center;
    background: transparent;
    color: #ffffff;
    height: auto;
    font-family: Karla;
  }
`;

export const StyledCopyright = styled.h3`
  &&& {
    margin-top: 72px;
    font-size: 20px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`;

export const StyledLink = styled.a`
  &&& {
    font-size: 16px;
    color: #ffffff;
    text-decoration: none !important;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    text-align: center;
  }
`;

// styling the clickable icons
export const StyledSocial = styled(Image)`
  &&& {
    width: 70px;
  }
`;

// styling the grid for the clickable icons
export const StyledGridSocial = styled(Grid)`
  &&& {
    margin: 50px 170px 0px;
  }
`;

// styling the grid for the linked sites
export const StyledGridLinks = styled(Grid)`
  &&& {
    margin-top: 36px;
  }
`;

export const StyledColumn = styled(Grid.Column)`
  &&& {
    padding: 0 !important;
  }
`;