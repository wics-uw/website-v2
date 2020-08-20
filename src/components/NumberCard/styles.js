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
    width: 116px;
    height: 75px;
    left: 280px;
    top: 1861px;

    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    /* identical to box height */
    text-align: center;
    letter-spacing: -0.03em;

    color: #000000;
  }
`;

// Styles for the card description
export const StyledCardDescription = styled.body`
  &&& {
    margin-top: 7px;
    width: 206px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #000000;
  }
`;