import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  &&& {
    text-align: center;
    margin-top: 50px;
    height: 427px;
    padding: 79px 210px 63px 210px;
    background-color: #aab4c0;
    font-family: Karla;
  }
`;

export const StyledCopyright = styled.h3`
  &&& {
    margin-top: 87px;
    margin-bottom: 0px;
    font-size: 20px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
  }
`;

// land acknowledgement
export const StyledTitleLeft = styled.h2`
  &&& {
    margin-left: 0px;
    font-size: 20px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    text-align: left;
    color: #0d0c35;
  }
`;

// additional links
export const StyledTitleRight = styled.h2`
  &&& {
    font-size: 20px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    text-align: left;
    color: #0d0c35;
  }
`;

// land acknowledgement
export const StyledTextLeft = styled.body`
  &&& {
    margin-bottom: 0px;
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    height: auto;
    background: transparent;
    text-align: left;
    color: #0d0c35;
  }
`;

export const StyledLinkRight = styled.a`
  &&& {
    margin-bottom: 0px;
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    height: auto;
    background: transparent;
    text-align: left;
    color: #0d0c35;
    :hover {
      color: #49657f;
      cursor: pointer;
    }
  }
`;
