import styled from "styled-components";
import {Image} from "semantic-ui-react";

export const StyledSubContactSectionWrapper = styled.div`
  &&& {
    margin-bottom: 40px;
  }
`;

export const StyledSubContactSectionWrapper2 = styled.div`
  &&& {
    margin-bottom: 24px;
  }
`;

// Styles for section title
export const StyledTitle = styled.h2`
  &&& {
    margin: 0 0 8px 0;
    font-family: "Karla Bold";
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    text-transform: capitalize;
    color: #000000;
  }
`;

export const StyledTitle2 = styled.p`
  &&& {
    margin-bottom: 16px;
    font-family: "Karla Bold";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    letter-spacing: -0.02em;
    text-transform: none;
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
  }
`;

export const StyledFaqLink = styled.a`
  &&& {
    text-decoration-line: underline;
    color: #000000;
  }
`;

export const StyledReachOutLink = styled.a`
  &&& {
    font-weight: bold;
    color: #000000;
  }
`;

// styling the clickable icons
export const StyledSocial = styled(Image)`
  &&& {
    margin: 0;
    padding-right: 16px;
  }
`;