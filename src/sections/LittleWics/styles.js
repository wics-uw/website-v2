import styled from "styled-components";
import {GridColumn, Grid} from 'semantic-ui-react';

//styles for TextColumnR
export const TextColumnR = styled(GridColumn)`
  &&& {
    padding-left: 48px !important;
  }
`;

//styles for TextColumnL
export const TextColumnL = styled(GridColumn)`
  &&& {
    padding-right: 48px !important;
  }
`;

//styles for ImageColumn
export const ImageColumn = styled(GridColumn)`
  &&& {
    padding: 0 !important;
  }
`;

//styles for Wrapper around office hours
export const AllOfficeHourWrapper = styled.div`
  &&& {
    margin-top: 16px;
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
  }
`;

//styles for image and text
export const StudentCardGrid = styled(Grid)`
  &&& {
    margin: 0 0 8px 0;
    display: flex;
    align-items: center;
  }
`;

