import styled from "styled-components";
import {Image} from "semantic-ui-react";

// Styles for executive card wrapper
export const StyledExecCardWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// Styles for the executive's image
export const StyledExecImage = styled(Image)`
  &&& {
    border-radius: 20px;
  }
`;

// Styles for the executive's name
export const StyledExecName = styled.body`
  &&& {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
  }
`;

// Styles for the executive's position
export const StyledExecPosition = styled.body`
  &&& {
    margin-top: 4px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #000000;
  }
`;