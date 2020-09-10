import styled from "styled-components";
import {Grid, GridColumn} from "semantic-ui-react";

// Styles for grid
export const StyledEventsWrapper = styled(Grid)`
  &&& {
    margin: 0 !important;
  }
`;


// Styles for grid column
export const StyledGridColumn = styled(GridColumn)`
  &&& {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    padding-left: 0 !important;
    &:last-child {
      padding-right: 0 !important;
    }
    @media only screen and (max-width: 425px) {
      padding-right: 0 !important;
    }
  }
`;
