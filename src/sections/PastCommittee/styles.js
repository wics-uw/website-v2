import styled from "styled-components";
import {Grid, GridColumn, Image} from "semantic-ui-react";

export const StyledImageWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledImage = styled(Image)`
  &&& {
    width: 800px;
  }
`;

export const StyledTermWrapper = styled.div`
  &&& {
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledTermText = styled.h3`
  &&& {
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 4px;
    @media only screen and (max-width: 425px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export const StyledGrid = styled(Grid)`
  &&& {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const StyledGridColumn = styled(GridColumn)`
  &&& {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    padding-right: 0 !important;
    @media only screen and (max-width: 425px) {
      &:nth-last-child(n+3) {
        margin-bottom: 8px;
      }
    }
  }
`;