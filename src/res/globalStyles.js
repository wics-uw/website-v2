// This file is for the styles for some components that are being used globally
import styled from "styled-components";
import {Container} from "semantic-ui-react";

// Styles for wrapper of each large section
// Example: About, Calendar, Get Involved, Resources, Sponsor, ...
export const StyledSectionWrapper = styled.div`
  &&& {
    scroll-margin: 100px;
    margin-bottom: 104px;
    @media only screen and (max-width: 425px) {
      margin-bottom: 96px;
    }
  }
`;

// Styles for wrapper of each small section
// Example: Our Mission, Our Numbers, ....
export const StyledSubSectionWrapper = styled.div`
  &&& {
    margin-bottom: 80px;
    @media only screen and (max-width: 425px) {
      margin-bottom: 64px;
    }
  }
`;

// Styles for title text of each large section / topic
export const StyledSectionText = styled.h3`
  &&& {
    margin-bottom: 16px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #0D0C35;
    opacity: 0.8;
    @media only screen and (max-width: 425px) {
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 8px;
    }
  }
`;

export const StyledBodyContainer = styled(Container)`
  &&& {
    width: 1060px;
     @media only screen and (max-width: 425px) {
        width: 90%;
    }
  }
`;

export const StyledGradientBackground = styled.div`
  &&& {
    padding-top: 56px;
    background: linear-gradient(180deg, rgba(231, 213, 208, 0.55) 0%, rgba(231, 190, 178, 0) 62.65%);
  }
`;

// Styles for social icon link
export const StyledSocialLink = styled.a`
  &&& {
    padding-right: 16px !important;
    margin: 0;
    cursor: pointer;
    :last-child {
      padding-right: 0 !important;
    }
  }
`;