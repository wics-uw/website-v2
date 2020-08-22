import styled from "styled-components";
import {Grid, Icon} from "semantic-ui-react";

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

export const StyledExecsWrapper = styled(Grid)`
  &&& {
    margin-top: 38px;
  }
`;
