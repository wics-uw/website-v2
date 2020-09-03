import styled from "styled-components";
import {Grid, Container} from "semantic-ui-react";

export const StyledFooterWrapper = styled.div`
  &&& {
    text-align: center;
    height: 452px;
    padding: 88px 0;
    background: #AAB4C0;
  }
`;

export const StyledFooterContentContainer = styled(Container)`
  &&& {
    width: 926px;
  }
`;

export const StyledTextGrid = styled(Grid)`
  &&& {
    margin-bottom: 24px;
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
  }
`;

export const StyledTitleLink = styled.a`
  &&& {
    text-decoration-line: underline;
    color: #0D0C35;
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

export const StyledText = styled.body`
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
  }
`;

export const StyledTextItalic = styled.body`
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
  }
`;

export const StyledLink = styled.a`
  &&& {
    margin: 0;
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    background: transparent;
    text-align: left;
    color: #0D0C35;
    :hover {
      color: #49657f;
      cursor: pointer;
    }
  }
`;

export const StyledSocialContainer = styled(Container)`
  &&& {
    width: 220px;
    margin-bottom: 32px;
  }
`;

export const StyledSocialGrid = styled(Grid)`
  &&& {
    margin: 0;
  }
`;

export const StyledSocialColumn = styled(Grid.Column)`
  &&& {
    padding: 0 !important;
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
  }
`;