import styled from "styled-components";
import {Grid, GridColumn} from "semantic-ui-react";

// Styles for grid
export const StyledEventsWrapper = styled(Grid)`
  &&& {
    margin-top: 32px;
  }
`;


// Styles for grid column
export const StyledGridColumn = styled(GridColumn)`
  &&& {
    margin: 0 0 0 0 !important;
    padding: 0 0 0 0 !important;
  }
`;
