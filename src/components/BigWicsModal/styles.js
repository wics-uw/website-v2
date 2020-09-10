import styled from "styled-components";
import {Header, Image, Modal, ModalContent} from "semantic-ui-react";

//styles for modal
export const StyledModal = styled(Modal)`
  &&& {
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    max-width: 680px;
    height: 80vh;
    min-height: 500px;
    overflow: auto;
  }
`;

//styled header
export const StyledHeader = styled(Header)`
  &&& {
    padding: 0 !important;
    vertical-align: top;
  }
`;

// icon styles
export const StyledIcon = styled(Image)`
  &&& {
    float: right;
    height: 33px !important;
    width: 33px !important;
    margin: 24px 16px 0 0 !important;
    cursor: pointer;
    color: #000000;
    @media only screen and (max-width: 425px) {
      margin: 16px 16px 0 0 !important;
    }
  }
`;

// header wrapper styles
export const HeaderWrapper = styled.div`
  &&& {
    padding: 40px 40px 16px 40px;
    @media only screen and (max-width: 425px) {
      padding: 24px 32px 16px 16px;
    }
}
`;

//description styles
export const StyledHeaderDescription = styled.h4`
  &&& {
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 0;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

// title styles
export const StyledHeaderTitle = styled.h2`
  &&& {
    font-family: "Karla Bold";
    font-style: normal;
    font-size: 32px;
    line-height: 37px;
    text-transform: capitalize;
    margin: 0 0 8px 0;
    color: #000000;
    @media only screen and (max-width: 425px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;

// title styles
export const StyledHeaderTitleLink = styled.a`
  &&& {
    &:hover {
      text-decoration: underline;
    }
    color: #000000;
    @media only screen and (max-width: 425px) {
      text-decoration: underline;
    }
  }
`;

//styles for modal content
export const StyledModalContent = styled(ModalContent)`
  &&&{
    padding: 24px 40px 40px 40px !important;
    @media only screen and (max-width: 425px) {
      padding: 16px 32px 24px 16px !important;
    }
  }
`;

//styles for the section wrapper
export const SectionWrapper = styled.div`
  &&& {
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
    @media only screen and (max-width: 425px) {
      margin-bottom: 16px;
    }
  }
`;

//styles for the list text
export const ListHeader = styled.p`
  &&& {
    font-family: "Source Sans Pro Bold";
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 8px;
    @media only screen and (max-width: 425px) {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 4px;
    }
  }
`;

//styles for anchor tag
export const StyledLink = styled.a`
  &&& {
    color: #000000;
    &:hover {
      text-decoration: underline;
    }
  }
`;

//styles for list
export const Styledul = styled.ul`
  &&& {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

//styles for each list item
export const Styledli = styled.p`
  &&& {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin: 0;
    @media only screen and (max-width: 425px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
