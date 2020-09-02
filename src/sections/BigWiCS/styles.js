import styled from "styled-components";
import {Grid, Icon} from "semantic-ui-react";

// Styles for cards wrapper
export const StyledEventsWrapper = styled(Grid)`
  &&& {
    margin-top: 20px;
  }
`;

export const CloseStyled = styled(Icon)`
  &&&{
    color: black;
    transform: translate (-50px, 20px);
  }
`;