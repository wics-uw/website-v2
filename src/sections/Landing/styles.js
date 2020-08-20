import styled from "styled-components";
import {Button, Grid, GridColumn, Icon, Image, ImageGroup} from "semantic-ui-react";

// Styles for landing page wrapper
export const StyledGridWrapper = styled(Grid)`
  &&& {
    height: 100vh;
    margin-bottom: 0 !important;
  }
`;

// Styles for left column
export const StyledGridLeftColumn = styled(GridColumn)`
  &&& {
    padding: 204px 0px 0px 137px !important;
    // Laptop(L+)+
    @media (min-width: 1700px) {
        padding: 0px 0px 0px 137px !important;
    }
  }
`;

// Styles for University of Waterloo text
export const StyledSchoolName = styled.body`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 32.57px;
    line-height: 38px;
    letter-spacing: -0.02em;
    color: #000000;
  }
`;

// Styles for WICS text
export const StyledWics = styled.h1`
  &&& {
    font-family: "Karla Bold";
    font-style: normal;
    font-weight: bold;
    font-size: 74px;
    line-height: 87px;
    letter-spacing: -0.05em;
    color: #000000;
    margin-top: 1px;
  }
`;

// Styles for undergrad committee text
export const StyledUndergrad = styled.body`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-top: 16px;
  }
`;

// Styles for social icon wrapper
export const StyledSocialWrapper = styled(ImageGroup)`
  &&& {
    margin-top: 29px;
  }
`;

// Styles for social icon
export const StyledSocial = styled(Image)`
  &&& {
    padding-right: 18px;
  }
`;

// Styles for mailing list button
export const StyledMailingButton = styled(Button)`
  &&& {
    margin-top: 35px;
    text-align: center;
    background: #49657F;
    border-radius: 42px;
    width: 212px;
    height: 43px;
    color: #FFFFFF;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`;

// Styles for right column
export const StyledGridRightColumn = styled(GridColumn)`
  &&& {
    padding: 150px 202.9px 0px 80px !important;
    // Laptop(L+)+
    @media (min-width: 1700px) {
        padding: 0px 202.9px 0px 80px !important;
    }
  }
`;

// Styles for landing page image
export const StyledLandingImage = styled(Image)`
  &&& {
    width: 472.1px;
    height: 550px;
    border-radius: 37.7682px;
  }
`;

// Styles for learn more wrapper
export const StyledLearnMoreWrapper = styled.div`
  &&& {
    margin-top: 42px;
    text-align: center;
  }
`;

// Styles for learn more text
export const StyledLearnMoreText = styled.div`
  &&& {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
    font-family: Karla;
  }
`;

// Styles for chevron down icon
export const StyledChevronDown = styled(Icon)`
  &&& {
    color: rgba(0, 0, 0, 0.1) !important;
  }
`;


