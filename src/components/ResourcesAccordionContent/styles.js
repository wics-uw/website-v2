import styled from "styled-components";

export const LinksWrapper = styled.div`
  &&& {
    padding-bottom: 8px;
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

//styles for the link name
export const LinkName = styled.body`
  &&& {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: inline;
    background-color: transparent;
    color: #000000;
  }
`;