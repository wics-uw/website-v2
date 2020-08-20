import styled from "styled-components";
import { Image, Container, Grid } from "semantic-ui-react";

export const StyledText = styled.div`
  &&& {
    margin: 30px;
    font-size: 16px;
    font-family: Karla;
  }
`;

export const StyledFooterWrapper = styled.div`
  &&& {
    flex-shrink: 0;
    text-align: center;
    margin-top: 50px;
    padding: 60px;
    color: white;
    background-color: #49657f;
    font-family: Karla;
  }
`;

export const StyledEmail = styled.div`
  &&& {
    margin: 0px;
    font-size: 26px;
    text-align: center;
    padding-bottom: 30px;
    font-family: Karla;
  }
`;

export const StyledCopyright = styled.div`
  &&& {
    margin: 20px;
    font-size: 16px;
    font-family: Karla;
  }
`;

export const StyledLink = styled.a`
  &&& {
    font-size: 16px;
    color: white;
    text-decoration: none !important;
    font-family: Karla;
  }
`;

// Styles for social icon
export const StyledSocial = styled(Image)`
  &&& {
    width: 75px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 60px;
  }
`;

// Styles for social icon
export const StyledContainer = styled(Container)`
  &&& {
    max-width: 50%;
    display: block;
  }
`;

export const StyledGridPic = styled(Grid)`
  &&& {
    @media (min-width: 1700px) {
      padding: 0px 350px 0px !important;
    }
  }
`;

export const StyledGridWord = styled(Grid)`
  &&& {
    margin: 20px;
    @media (min-width: 1700px) {
      padding: 0px 135px 0px !important;
    }
  }
`;

export const StyledColumn = styled(Grid.Column)`
  &&& {
    margin: 0px !important;
    padding: 0px !important;
  }
`;

export const StyledRow = styled(Grid.Row)`
  &&& {
    margin: 0px !important;
    padding: 0px !important;
  }
`;
