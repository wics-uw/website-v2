import styled from "styled-components";
import {Grid, GridRow} from "semantic-ui-react";

//styles for the sponsor type
export const SponsorType = styled.h4`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
    background-color: transparent;
    color: #000000;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 16px;
    }
  }
`;

export const StyledGrid = styled(Grid)`
  &&& {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledGridRow = styled(GridRow)`
  &&& {
    &:not(:first-child) {
      padding-top: 0 !important;
    }
    &:not(:last-child) {
      margin: 0 0 32px 0 !important;
    }
    padding-bottom: 0 !important;
  }
`;

//styles for the sponsor type
export const SponsorTierWrapper = styled.div`
  &&& {
    margin-bottom: 32px;
  }
`;

export const SponsorImg = styled.img`
  &&& {
    vertical-align: middle;
    margin-right: 16px;
    @media only screen and (max-width: 425px) {
      margin-right: 0;
    }
  }
`;