import styled from "styled-components";
import { Image, ImageGroup } from "semantic-ui-react";

export const StyledLogo = styled(Image)`
  &&& {
    width: 30px;
    margin: 10px 20px 20px 100px;
    // margin: 25px 120px 300px 100px;
    border: 95px;
  }
`;

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
    margin-top: 20px;
    padding: 20px;
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
    font-size: 12px;
  }
`;

export const StyledLink = styled.a`
  &&& {
    margin: 200x;
    font-size: 16px;
    color: white;
    text-decoration: none !important;
  }
`;

// Styles for social icon wrapper
export const StyledSocialWrapper = styled(ImageGroup)`
  &&& {
    margin-top: 29px;
  }
`;

// Styles for social icon
export const StyledSocial = styled(Image)`
  &&& {
    width: 15%;
    padding-bottom: 20px;
  }
`;
