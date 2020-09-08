import styled from "styled-components";
import {Grid, GridColumn, Image} from 'semantic-ui-react';

//styles for TextColumnR
export const TextColumnR = styled(GridColumn)`
  &&& {
    padding-left: 48px !important;
    @media only screen and (max-width: 425px) {
      padding: 0 1em !important;
      text-align: center;
      margin-top: 16px;
    }
  }
`;

//styles for TextColumnL
export const TextColumnL = styled(GridColumn)`
  &&& {
    padding-right: 48px !important;
    padding-left: 0 !important;
    @media only screen and (max-width: 425px) {
      padding: 0 1em !important;
      text-align: center;
      margin-top: 16px;
    }
  }
`;

//styles for ImageColumn
export const ImageColumn = styled(GridColumn)`
  &&& {
    padding: 0 !important;
  }
`;

// styles for image
export const StyledImage = styled(Image)`
  &&& {
    border-radius: 27px;
  }
`;

// styles for link
export const StyledLink = styled.a`
  &&& {
    text-decoration-line: underline;
    color: #49657F;
    &:hover {
      color: #60809D;
    }
  }
`;

//styles for Wrapper around office hours
export const AllOfficeHourWrapper = styled.div`
  &&& {
    margin-top: 16px;
    @media only screen and (max-width: 425px) {
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
    }
  }
`;

//styles for wrapper around office hours
export const OfficeHourWrapper = styled.div`
  &&& {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;    
    width: 539px;
    @media only screen and (max-width: 425px) {
      font-size: 14px;
      line-height: 18px;
      width: 170px;
    }
  }
`;

//styles for office hour
export const OfficeHour = styled.p`
  &&& {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;  
    float: right;  
    display: inline;
    width: 400px;
    @media only screen and (max-width: 425px) {
      font-size: 14px;
      line-height: 18px;
      width: 122px;
      text-align: left;
    }
  }
`;

//styles for image and text
export const StudentCardGrid = styled(Grid)`
  &&& {
    margin: 0 0 8px 0;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 425px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 32px;
    }
  }
`;

