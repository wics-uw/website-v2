import styled from "styled-components";
import {GridColumn, Icon} from "semantic-ui-react";

export const StyledPastExecsSectionWrapper = styled.div`
  &&& {
    margin-top: 50px;
    margin-bottom: 200px;
  }
`;

export const StyledChevronIcon = styled(Icon)`
  &&& {
    margin-left: 31px;
    margin-top: 20px;
  }
`;

export const StyledImageWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledPastExecsTableWrapper = styled.div`
  &&& {
    margin: 0 15px;
  }
`;

export const StyledTermWrapper = styled.div`
  &&& {
    margin-top: 60px;
  }
`;

export const StyledTermText = styled.h3`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #000000;
  }
`;

export const StyledExecColumnWrapper = styled(GridColumn)`
  &&& {
    padding-top: 1rem !important;
    padding-bottom: 0 !important;
  }
`;