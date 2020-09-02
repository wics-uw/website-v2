import styled from "styled-components";
import {Header, Modal, Icon, ModalContent} from "semantic-ui-react";

// title styles
export const StyledTitle = styled.h2`
&&&{
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    text-transform: capitalize;
    margin-bottom: 8px;
}
`;

//description styles
export const StyledDescription = styled.h4`
&&&{
    margin-top: 0;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
}
`;

// icon styles
export const StyledIcon = styled(Icon)`
&&&{
  : hover {
    cursor: pointer;
  }  
  float: right;
  margin: 0 0 0 0 !important;
  padding-top: 10px !important;
  margin-right: 10px !important;
}
`;

// header wrapper styles
export const HWrapper = styled.div`
&&&{
  padding: 32px 32px 32px 32px;
  margin: 0 0 0 0;
}
`;

//styled header
export const StyledHeader = styled(Header)`
&&&{
    padding: 0 0 0 0 !important;
    vertical-align: top;
    border-radius: 24px 24px 0 0!important;
}
`;

//styles for modal
export const StyledModal = styled(Modal)`
&&&{
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 24px !important;
  margin: 0 0 0 0 !important;
  padding: 0 0 0 0 !important;
  width: 680px;
  height: 752px;
}
`;

//styles for modal content
export const StyledModalContent = styled(ModalContent)`
&&&{
  margin: 0 0 0 0 !important;
  padding: 32px 40px 32px 40px !important;
}
`;

// styles for popup header
export const PopupHead = styled.body`
&&&{
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
}
`;

//styles for list
export const Styledul = styled.ul`
&&&{
  list-style-type: none;
  padding: 0;
  margin: 0;
}
`;

//styles for each list item
export const Styledli = styled.li`
&&&{
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

}
`;

//styles for the section wrapper
export const SectionWrapper = styled.div`
&&&{
  margin-top: 24px;
}
`;

//styles for the list text
export const ListHead = styled.body`
&&&{
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
}
`;