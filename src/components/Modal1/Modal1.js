import React, { Component } from 'react';
import { Modal, Header, Icon, Button } from 'semantic-ui-react';
import FacultyCard from '../FacultyCard/FacultyCard';
import facultyStrings from "../../res/facultyStrings";
import sponsored from '../../res/images/sponsored.svg';
import { CloseStyled, StyledHeader, HWrapper, StyledTitle, StyledDescription } from "./styles";

export default function Modal1() {


  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <Modal
        open={open}
        trigger={<div><FacultyCard title={facultyStrings.sponsored.title} image={sponsored} descriptionShort={facultyStrings.sponsored.description} /></div>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}>
        <StyledHeader>
          
        <CloseStyled>
        <Icon name='close' onClick= {() => setOpen(false)} color='black'/>
        </CloseStyled>
        <HWrapper>
        <StyledTitle>
        {facultyStrings.sponsored.title}
        </StyledTitle>
        <StyledDescription>
        {facultyStrings.sponsored.description}
        </StyledDescription>
        </HWrapper>
        
        </StyledHeader>
        <Modal.Content>
          <CloseStyled icon='close'/>
          <p>
            {facultyStrings.sponsored.description}
          </p>
    
        </Modal.Content>
      </Modal>
    </div>
  )

}
