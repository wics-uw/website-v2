import styled from "styled-components";
import {Container, Grid, GridColumn} from "semantic-ui-react";

export const StyledFooterWrapper = styled.div`
  &&& {
    text-align: center;
    height: 452px;
    padding: 88px 0;
    background: #AAB4C0;
    // Mobile
    @media only screen and (max-width: 425px) {
      height: auto;
      padding: 32px 0 64px 0;
    }
  }
`;

export const StyledFooterContentContainer = styled(Container)`
  &&& {
    width: 926px;
    @media only screen and (max-width: 425px) {
      width: 90% !important;
    }
  }
`;

export const StyledTextGrid = styled(Grid)`
  &&& {
    margin-bottom: 24px;
  }
`;

export const StyledGridColumn = styled(GridColumn)`
  &&& {
    @media only screen and (max-width: 425px) {
      margin-bottom: 32px;
      padding-bottom: 0 !important;
      &:not(:first-child) {
        padding-top: 0 !important;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const StyledTitle = styled.p`
  &&& {
    margin: 0 0 8px 0;
    font-size: 18px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    text-align: left;
    color: #0D0C35;
    text-transform: none;
    @media only screen and (max-width: 425px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const StyledTitleLink = styled.a`
  &&& {
    color: #0D0C35;
    &:hover {
      text-decoration-line: underline;
    }
    @media only screen and (max-width: 425px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const StyledList = styled.ul`
  &&& {
    list-style-type: none;
    text-align: left;
    padding: 0;
    margin: 0 0 8px 0;
  }
`;

export const StyledText = styled.p`
  &&& {
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    background: transparent;
    text-align: left;
    color: #0D0C35;
    text-transform: none;
    margin: 0;
    @media only screen and (max-width: 425px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const StyledTextItalic = styled.p`
  &&& {
    font-size: 16px;
    font-family: "Source Sans Pro Italic";
    font-style: italic;
    font-weight: normal;
    line-height: 20px;
    background: transparent;
    text-align: left;
    color: #0D0C35;
    text-transform: none;
    margin: 0;
    @media only screen and (max-width: 425px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const StyledLi = styled.li`
  &&& {
    @media only screen and (max-width: 425px) {
      margin-bottom: 4px;
    }
  }
`;

export const StyledLink = styled.a`
  &&& {
    margin-bottom: 0;
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    background: transparent;
    text-align: left;
    color: #0D0C35;
    :hover {
      text-decoration-line: underline;
    }
    @media only screen and (max-width: 425px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const StyledSocialContainer = styled(Container)`
  &&& {
    margin-bottom: 32px;
  }
`;

export const StyledCopyright = styled.h3`
  &&& {
    margin: 0;
    font-size: 20px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    color: #0D0C35;
    @media only screen and (max-width: 425px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;