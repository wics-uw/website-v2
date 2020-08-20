import styled from "styled-components";
import { Image, Grid } from "semantic-ui-react";

export const StyledText = styled.div`
  &&& {
    margin: 30px;
    font-size: 16px;
    font-family: Karla;
  }
`;

export const StyledFooterWrapper = styled.div`
  &&& {
    flex-shrink: 0;
    text-align: center;
    margin-top: 50px;
    padding: 60px;
    color: white;
    background-color: #49657f;
    font-family: Karla;
  }
`;

export const StyledEmail = styled.div`
  &&& {
    margin: 10px;
    font-size: 26px;
    text-align: center;
    padding-bottom: 40px;
    font-family: Karla;
  }
`;

export const StyledCopyright = styled.div`
  &&& {
    margin: 20px;
    font-size: 20px;
    font-family: Karla;
  }
`;

export const StyledLink = styled.a`
  &&& {
    font-size: 18px;
    color: white;
    text-decoration: none !important;
    font-family: Karla;
  }
`;

// styling the clickable icons
export const StyledSocial = styled(Image)`
  &&& {
    width: 75px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 20px;
    padding-bottom: 60px;
  }
`;

// styling the grid for the clickable icons
export const StyledGridPic = styled(Grid)`
  &&& {
    margin: 0px 340px;
  }
`;

// styling the grid for the linked sites
export const StyledGridWord = styled(Grid)`
  &&& {
    margin: 0px 100px;
  }
`;

export const StyledColumn = styled(Grid.Column)`
  &&& {
    margin: 0px !important;
    padding: 0px !important;
  }
`;

export const StyledRow = styled(Grid.Row)`
  &&& {
    margin: 0px !important;
    padding: 0px !important;
  }
`;
