import styled from "styled-components";
import { Grid } from "semantic-ui-react";

export const StyledTitle = styled.p`
  &&& {
    margin-bottom: 8px;
    font-size: 24px;
    font-family: "Karla Bold";
    font-style: normal;
    line-height: 28px;
    text-align: center;
    color: #000000;
    letter-spacing: -0.02em;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

export const StyledText = styled.p`
  &&& {
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    background: transparent;
    text-align: center;
    color: #000000;
    margin: 0;
    @media only screen and (max-width: 425px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const StyledColumn = styled(Grid.Column)`
  &&& {
    background-color: #f8f3ef;
    padding: 36px !important;
    border-radius: 10px;
    height: 170px !important;
    // calculated as (1-12/1056)/2 (must round down)
     width: 49.43% !important;
    margin-right: ${props => props.left ? "12px" : "0"};
    @media only screen and (max-width: 1051px) {
      width: 49.2% !important;
    }
    @media only screen and (max-width: 767px) {
      width: 48.4% !important;
    }
    @media only screen and (max-width: 425px) {
      margin-bottom: ${props => props.left ? "16px" : "0"};
      margin-right: 0;
      padding: 24px !important;
      height: 149px !important;
    }
  }
`;
