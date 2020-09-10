import styled from "styled-components";
import {Button, Container, Grid, GridColumn, Image, ImageGroup} from "semantic-ui-react";

export const StyledLandingContainer = styled(Container)`
  &&& {
    justify-content: center;
    height: 100vh;
    min-height: 724px;
    width: 1195px;
    padding-top: 74px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 425px) {
      min-height: 568px;
      padding-top: 30px;
    }
  }
`;

// Styles for landing page wrapper
export const StyledGridWrapper = styled(Grid)`
  &&& {
    margin: 0 !important;
    @media only screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`;

export const StyledTextColumn = styled(GridColumn)`
  &&& {
    padding: 0 !important;
  }
`;

export const StyledImageColumn = styled(GridColumn)`
  &&& {
    @media only screen and (max-width: 425px) {
      margin-bottom: 8px;
      padding: 0 !important;
    }
  }
`;

// Styles for University of Waterloo text
export const StyledSchoolName = styled.p`
  &&& {
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 0;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

// Styles for WICS text
export const StyledWics = styled.p`
  &&& {
    font-family: "Karla Bold";
    font-style: normal;
    font-size: 70px;
    line-height: 85%;
    letter-spacing: -0.05em;
    color: #000000;
    margin: 0 0 16px 0;
    @media only screen and (max-width: 425px) {
      font-size: 29.8003px;
      line-height: 102.5%;
      margin: 0 0 8px 0;
    }
  }
`;

// Styles for undergrad committee text
export const StyledUndergrad = styled.p`
  &&& {
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin: 0 0 32px 0;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

// Styles for social icon wrapper
export const StyledSocialWrapper = styled(ImageGroup)`
  &&& {
    margin: 0 0 32px 0;
  }
`;

// Styles for mailing list button
export const StyledMailingButton = styled(Button)`
  &&& {
    text-align: center;
    background: #49657F;
    border-radius: 42px;
    color: #FFFFFF;
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 16px 32px;
    &:hover {
      background: #60809D;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      transform: translate(0,-2px);
    }
    &:focus {
      background: #3F566B;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

// Styles for learn more wrapper
export const StyledLearnMoreWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-bottom: 32px;
    cursor: pointer;
    @media only screen and (max-width: 425px) {
      bottom: 0;
      margin-bottom: 16px;
    }
  }
`;

// Styles for learn more text
export const StyledLearnMoreText = styled.p`
  &&& {
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Source Sans Pro";
    &:hover { 
      color: #333333;
    }
  }
`;

// Styles for chevron down icon
export const StyledChevronDown = styled(Image)`
  &&& {
    margin-top: 8px;
  }
`;


