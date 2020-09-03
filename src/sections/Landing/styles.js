import styled from "styled-components";
import {Button, Container, Grid, GridColumn, Image, ImageGroup} from "semantic-ui-react";

export const StyledLandingContainer = styled(Container)`
  &&& {
    height: 100vh;
    min-height: 724px;
    width: 1195px;
    padding-top: 74px;
    display: flex;
    align-items: center;
  }
`;

// Styles for landing page wrapper
export const StyledGridWrapper = styled(Grid)`
  &&& {
    margin: 0 !important;
  }
`;

export const StyledColumn = styled(GridColumn)`
  &&& {
    padding: 0 !important;
  }
`;

// Styles for University of Waterloo text
export const StyledSchoolName = styled.p`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 32.57px;
    line-height: 38px;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 0;
  }
`;

// Styles for WICS text
export const StyledWics = styled.p`
  &&& {
    font-family: "Karla Bold";
    font-style: normal;
    font-weight: bold;
    font-size: 74px;
    line-height: 87px;
    letter-spacing: -0.05em;
    color: #000000;
    margin: 0;
  }
`;

// Styles for undergrad committee text
export const StyledUndergrad = styled.p`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin: 0 0 32px 0;
  }
`;

// Styles for social icon wrapper
export const StyledSocialWrapper = styled(ImageGroup)`
  &&& {
    margin: 0 0 32px 0;
  }
`;

// Styles for social icon
export const StyledSocial = styled(Image)`
  &&& {
    padding-right: 16px;
  }
`;

// Styles for mailing list button
export const StyledMailingButton = styled(Button)`
  &&& {
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

// Styles for learn more wrapper
export const StyledLearnMoreWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-bottom: 32px;
    width: 1195px;
  }
`;

// Styles for learn more text
export const StyledLearnMoreText = styled.body`
  &&& {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Source Sans Pro";
  }
`;

// Styles for chevron down icon
export const StyledChevronDown = styled(Image)`
  &&& {
    margin-top: 8px;
  }
`;


