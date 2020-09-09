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
export const StyledExecName = styled.label`
  &&& {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #000000;
    margin: 0;
    @media only screen and (max-width: 425px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

// Styles for the executive's position
export const StyledExecPosition = styled.p`
  &&& {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #000000;
  }
`;