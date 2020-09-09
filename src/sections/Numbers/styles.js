import styled from "styled-components";
import {Grid, GridColumn} from "semantic-ui-react";

export const StyledGrid = styled(Grid)`
  &&& {
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media only screen and (max-width: 425px) {
      margin-bottom: 16px;
    }
  }
`;

export const StyledGridColumn = styled(GridColumn)`
  &&& {
    @media only screen and (max-width: 425px) {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
      &:not(:first-child) {
        padding-top: 0 !important;
      }
      padding-bottom: 0 !important;
    }
  }
`;