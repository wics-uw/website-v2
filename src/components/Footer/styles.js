import styled from "styled-components";
import { Image, Container } from "semantic-ui-react";

export const StyledText = styled.div`
  &&& {
    margin: 30px;
    font-size: 16px;
  }
`;

export const StyledFooterWrapper = styled.div`
  &&& {
    flex-shrink: 0;
    text-align: center;
    margin-top: 50px;
    padding: 50px;
    color: white;
    background-color: #4a607b;
  }
`;

export const StyledEmail = styled.div`
  &&& {
    margin: 0px;
    font-size: 26px;
    text-align: center;
    padding-bottom: 50px;
  }
`;

export const StyledCopyright = styled.div`
  &&& {
    margin: 20px;
    font-size: 16px;
  }
`;

export const StyledLink = styled.a`
  &&& {
    font-size: 16px;
    color: white;
    text-decoration: none !important;
  }
`;

// Styles for social icon
export const StyledSocial = styled(Image)`
  &&& {
    width: 30%;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 10px;
    padding-bottom: 70px;
  }
`;

// // Styles for social icon
// export const StyledContainer = styled(Container)`
//   &&& {
//   }
// `;
