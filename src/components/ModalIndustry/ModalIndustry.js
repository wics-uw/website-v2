import React from 'react';
import FacultyCard from '../BigWiCSCard/BigWiCSCard';
import facultyStrings from "../../res/facultyStrings";
import industry from '../../res/images/big_wics_industry.svg';
import { StyledHeader, HWrapper, StyledTitle, StyledDescription, StyledModal, StyledIcon, SectionWrapper, StyledModalContent, Styledul, Styledli, Styleda, ListHead } from "./styles";
import close from '../../res/images/close.svg';


//Function for Industry Modal
export default function ModalIndustry() {

  // To control state
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      {/* start of modal*/}
      <StyledModal
        open={open}
        trigger={<div><FacultyCard title={facultyStrings.industry.title} image={industry} descriptionShort={facultyStrings.industry.description} /></div>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}>

        {/* modal header*/}
        <StyledHeader>

          {/* x in corner*/}
          <StyledIcon src={close} onClick={() => setOpen(false)} color='black' />

          {/* Header Text*/}
          <HWrapper>
            <StyledTitle>
              {facultyStrings.industry.title}
            </StyledTitle>
            <StyledDescription>
              {facultyStrings.industry.description}
            </StyledDescription>
          </HWrapper>
        </StyledHeader>

        {/* Modal Content*/}
        <StyledModalContent>
          {/* Start of Content*/}
          {facultyStrings.industry.popupLink === '' ?
            <StyledDescription>
              {facultyStrings.industry.popupHead}
            </StyledDescription> :
            <Styleda href={facultyStrings.industry.popupLink}><StyledDescription>{facultyStrings.industry.popupHead}</StyledDescription></Styleda>}

          {/* The various sections*/}
          {Object.entries(facultyStrings.industry.sections).map(([key, section]) => (
            <SectionWrapper>
              {section.link === '' ? <ListHead> {section.title} </ListHead> :
                <Styleda href={section.link}><ListHead>{section.title}</ListHead></Styleda>}
              <Styledul>
                {Object.entries(section.desc).map(([key, text]) => (
                  
                  <Styledli>
                    - {text}
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
