import React from 'react';
import FacultyCard from '../BigWiCSCard/BigWiCSCard';
import facultyStrings from "../../res/bigWiCSStrings";
import outreach from '../../res/images/big_wics_outreach.svg';
import { StyledHeader, Styleda, HWrapper, StyledTitle, StyledDescription, StyledModal, StyledIcon, SectionWrapper, StyledModalContent, Styledul, Styledli, ListHead } from "./styles";
import close from '../../res/images/close.svg';


//Function for Outreach Modal
export default function ModalIndustry() {

  // To control state
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      {/* start of modal*/}
      <StyledModal
        open={open}
        trigger={<div><FacultyCard title={facultyStrings.outreach.title} image={outreach} descriptionShort={facultyStrings.outreach.description} /></div>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}>

        {/* modal header*/}
        <StyledHeader>

          {/* x in corner*/}
          <StyledIcon src={close} onClick={() => setOpen(false)} color='black' />


          {/* Header Text*/}
          <HWrapper>
          <Styleda href={facultyStrings.outreach.popupLink}><StyledTitle>
              {facultyStrings.outreach.title}
            </StyledTitle></Styleda>
            <StyledDescription>
              {facultyStrings.outreach.description}
            </StyledDescription>
          </HWrapper>
        </StyledHeader>

        {/* Modal Content*/}
        <StyledModalContent>
          {/* Start of Content*/}

          {/* The various sections*/}
          {Object.entries(facultyStrings.outreach.sections).map(([key, section]) => (
            <SectionWrapper>
              {section.link === '' ? <ListHead> {section.title} </ListHead> :
                <Styleda href={section.link}><ListHead>{section.title}</ListHead></Styleda>}
              <Styledul>
                {Object.entries(section.desc).map(([key, text]) => (
                  <Styledli>
                    {text}
                  </Styledli>
                ))}
              </Styledul>
            </SectionWrapper>
          ))}




        </StyledModalContent>
      </StyledModal>
    </div>
  )

}
