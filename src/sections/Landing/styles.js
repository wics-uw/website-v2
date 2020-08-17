import styled from "styled-components";
import {Grid, GridColumn} from "semantic-ui-react";

export const StyledGridWrapper = styled(Grid)`
  &&& {
    height: 100vh;
    margin-bottom: 0 !important;
  }
`;

export const StyledGridLeftColumn = styled(GridColumn)`
  &&& {
    padding: 0px 0px 0px 137px !important;
  }
`;

export const StyledSchoolName = styled.text`
  &&& {
    font-style: normal;
    font-weight: normal;
    font-size: 32.5714px;
    line-height: 38px;
    color: #000000;
    font-family: Karla;
  }
`;

export const StyledGridRightColumn = styled(GridColumn)`
  &&& {
    padding: 0px 202.9px 0px 0px !important;
  }
`;