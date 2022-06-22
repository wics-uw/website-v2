import styled from "styled-components";
import {Grid, GridColumn} from "semantic-ui-react";

// Styles for grid
export const StyledEventsWrapper = styled(Grid)`
  &&& {
    margin: 20px -12px 20px 0;
  }
`;


// Styles for grid column
export const StyledGridColumn = styled(GridColumn)`
  &&& {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    padding-left: 0 !important;
    padding-right: 12px !important;
  }
`;
