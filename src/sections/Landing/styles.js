import styled from "styled-components";
import {Button, Grid, GridColumn, Image, ImageGroup} from "semantic-ui-react";

export const StyledGridWrapper = styled(Grid)`
  &&& {
    height: 100vh;
    margin-bottom: 0 !important;
  }
`;

export const StyledGridLeftColumn = styled(GridColumn)`
  &&& {
    padding: 204px 0px 0px 137px !important;
    // Laptop(L+)+
    @media (min-width: 1700px) {
        padding: 0px 0px 0px 137px !important;
    }
  }
`;

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

export const StyledSocialWrapper = styled(ImageGroup)`
  &&& {
    margin-top: 29px;
  }
`;

export const StyledSocial = styled(Image)`
  &&& {
    padding-right: 18px;
  }
`;

export const StyledMailingButton = styled(Button)`
  &&& {
    margin-top: 35px;
    padding: 0;
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

export const StyledGridRightColumn = styled(GridColumn)`
  &&& {
    padding: 140px 202.9px 0px 80px !important;
    // Laptop(L+)+
    @media (min-width: 1700px) {
        padding: 0px 202.9px 0px 80px !important;
    }
  }
`;

export const StyledLandingImage = styled(Image)`
  &&& {
    width: 472.1px;
    height: 550px;
    border-radius: 37.7682px;
  }
`;

