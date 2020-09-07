import styled from "styled-components";
import {Grid, GridColumn} from "semantic-ui-react";

//styles for the sponsor type for links
export const SponsorTypeLink = styled.h3`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #000000;
    margin: 0;
  }
`;

//styles for the grid
export const StyledGrid = styled(Grid)`
  &&& {
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

export const StyledSponsorLinkTypeWrapper = styled.div`
  &&& {
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

//styles for grid columns for hyperlinks
export const StyledGridColumnL = styled(GridColumn)`
  &&& {
    padding-right: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 16px !important;
  }
`;

// styles for the text of hyperlinks in more sponsors
export const StyledLink = styled.a`
  &&& {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
    padding: 0;
    background-color: transparent;
    &:hover {
      text-decoration-line: underline;
    }
  }
`;
