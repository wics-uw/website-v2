import styled from "styled-components";
import {Grid, GridColumn} from "semantic-ui-react";

export const StyledGrid = styled(Grid)`
  &&& {
    @media only screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
      align-content: center;
    }
  }
`;

export const StyledGridColumn = styled(GridColumn)`
  &&& {
    @media only screen and (max-width: 425px) {
      &:not(:last-child) {
        margin-bottom: 32px;
      }
      &:not(:first-child) {
        padding-top: 0 !important;
      }
      padding-bottom: 0 !important;
    }
  }
`;

