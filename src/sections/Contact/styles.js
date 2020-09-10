import styled from "styled-components";

export const StyledSubContactSectionWrapper = styled.div`
  &&& {
    margin-bottom: 40px;
    @media only screen and (max-width: 425px) {
      margin-bottom: 32px;
    }
  }
`;

export const StyledSubContactSectionWrapper2 = styled.div`
  &&& {
    margin-bottom: 24px;
    @media only screen and (max-width: 425px) {
      margin-bottom: 32px;
    }
  }
`;

// Styles for section title
export const StyledTitle = styled.h2`
  &&& {
    margin: 0 0 8px 0;
    font-family: "Karla Bold";
    font-style: normal;
    font-size: 32px;
    line-height: 37px;
    text-transform: capitalize;
    color: #000000;
    @media only screen and (max-width: 425px) {
      font-size: 24px;
      line-height: 28px;
      margin: 0 0 4px 0;
    }
  }
`;

export const StyledTitle2 = styled.p`
  &&& {
    margin-bottom: 16px;
    font-family: "Karla Bold";
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    letter-spacing: -0.02em;
    text-transform: none;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 8px;
    }
  }
`;

export const StyledText = styled.h4`
  &&& {
    width: 600px;
    margin: 0;
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #000000;
    text-transform: none;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 21px;
      width: 100%;
    }
  }
`;

export const StyledFaqLink = styled.a`
  &&& {
    text-decoration-line: underline;
    font-family: "Karla Bold";
    color: #49657F;
    &:hover {
      color: #60809D;
    }
  }
`;

export const StyledReachOutLink = styled.a`
  &&& {
    text-decoration-line: underline;
    font-family: "Karla Bold";
    color: #49657F;
    &:hover {
      color: #60809D;
    }
  }
`;
