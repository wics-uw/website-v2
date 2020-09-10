import styled from "styled-components";
import {Image} from "semantic-ui-react";

// Styles for the wrapper of the card
export const StyledCardWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

// Styles for the card image
export const StyledCardImage = styled(Image)`
  &&& {
    border-radius: 20px;
    margin-bottom: 29px;
    @media only screen and (max-width: 425px) {
      margin-bottom: 16px;
    }
  }
`;

// Styles for the card title
export const StyledCardTitle = styled.p`
  &&& {
    margin-bottom: 8px;
    font-family: "Karla Bold";
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    @media only screen and (max-width: 425px) {
      margin-bottom: 4px;
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

// Styles for the card description
export const StyledCardDescription = styled.p`
  &&& {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #000000;
    margin: 0;
    @media only screen and (max-width: 425px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;