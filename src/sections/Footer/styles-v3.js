import styled from "styled-components";
import { Image, Grid } from "semantic-ui-react";

export const StyledFooterWrapper = styled.div`
  &&& {
    text-align: center;
    margin-top: 50px;
    height: 452px;
    padding: 84px 232px 62px 232px;
    background-color: #aab4c0;
    font-family: Karla;
  }
`;

export const StyledTitle = styled.h2`
  &&& {
    margin-left: 0px;
    font-size: 18px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    text-align: left;
    color: #0d0c35;
    text-transform: none;
  }
`;

export const StyledText = styled.body`
  &&& {
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    height: auto;
    background: transparent;
    text-align: left;
    color: #0d0c35;
    text-transform: none;
  }
`;

export const StyledCopyright = styled.h3`
  &&& {
    margin-top: 0px;
    margin-bottom: 40px;
    font-size: 20px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const StyledLink = styled.a`
  &&& {
    margin-bottom: 0px;
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    height: auto;
    background: transparent;
    text-align: left;
    color: #0d0c35;
    :hover {
      color: #49657f;
      cursor: pointer;
    }
  }
`;

// styling the grid for the clickable icons
export const StyledGridSocial = styled(Grid)`
  &&& {
    margin: 0px 480px 0px;
  }
`;

// styling the clickable icons
export const StyledSocial = styled(Image)`
  &&& {
    width: 39px;
  }
`;

export const StyledColumn = styled(Grid.Column)`
  &&& {
    padding: 0 !important;
  }
`;