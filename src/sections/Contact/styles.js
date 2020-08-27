import styled from "styled-components";
import { Image, Grid } from "semantic-ui-react";

// styling the clickable icons
export const StyledSocial = styled(Image)`
  &&& {
    width: 65px;
  }
`;

// styling the grid for the clickable icons
export const StyledGridSocial = styled(Grid)`
  &&& {
    width: 309px;
    margin-left: 0px;
    margin-top: 14px;
    margin-bottom: 130px;
  }
`;

// Styles for section title
export const StyledTitle = styled.h2`
  &&& {
    margin-top: 30px;
    margin-bottom: 4px;
    font-family: "Karla Bold";
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    text-transform: capitalize;
    color: #000000;
  }
`;

export const StyledColumn = styled(Grid.Column)`
  &&& {
    padding: 0 !important;
  }
`;


export const StyledTitle2 = styled.h3`
  &&& {
    margin-top: 29px;
    font-family: "Karla Bold";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
`;

export const StyledText = styled.p`
  &&& {
    margin-top: 0px;
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #000000;
  }
`;