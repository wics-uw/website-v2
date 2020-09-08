import styled from "styled-components";

// Styles for section title
export const StyledTitle = styled.h2`
  &&& {
    margin-bottom: 4px;
    font-family: "Karla Bold";
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    text-transform: capitalize;
    color: #000000;
    @media only screen and (max-width: 425px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;

// Styles for section description
export const StyledDescription = styled.h4`
  &&& {
    margin: 0;
    width: 648px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #000000;
     @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 21px;
      width: 100%;
    }
  }
`;

export const StyledWrapper = styled.div`
  &&& {
    margin: 0 0 32px 0;
  }
`;