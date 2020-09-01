import styled from "styled-components";

// Styles for the wrapper of the card
export const StyledCardWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

// Styles for the card Number
export const StyledNumber = styled.body`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    text-align: center;
    letter-spacing: -0.03em;
    color: #000000;
  }
`;

// Styles for the card description
export const StyledCardDescription = styled.h4`
  &&& {
    margin: 0 0 8px 0;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
  }
`;

// Styles for the approx text
export const StyledApprox = styled.body`
  &&& {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  }
`;