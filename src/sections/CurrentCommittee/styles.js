import styled from "styled-components";
import {Grid, GridColumn} from "semantic-ui-react";

export const StyledCurrExecSectionWrapper = styled.div`
  &&& {
    margin-bottom: 80px;
    @media only screen and (max-width: 425px) {
      margin-bottom: 32px;
    }
  }
`;

// Styles for the wrapper of the display of executives
export const StyledExecWrapper = styled(Grid)`
  &&& {
    margin: 0 125px 0 125px;
    @media only screen and (max-width: 425px) {
      margin: 0;
    }
  }
`;

export const StyledGridColumn = styled(GridColumn)`
  &&& {
    @media only screen and (max-width: 425px) {
      padding: 0 !important;
      &:nth-last-child(n+3) {
        margin-bottom: 24px;
      }
    }
  }
`;

export const StyledMobileTerm = styled.h4`
  &&& {
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 16px;
  }
`;