import React from 'react';
import FacultyCard from '../BigWiCSCard/BigWiCSCard';
import facultyStrings from "../../res/facultyStrings";
import empowerment from '../../res/images/big_wics_empowerment.svg';
import { StyledHeader, HWrapper, StyledTitle, StyledDescription, StyledModal, StyledIcon, PopupHead, SectionWrapper, StyledModalContent, Styledul, Styledli, ListHead } from "./styles";


//Function for Empowerment Modal
export default function ModalIndustry() {

  // To control state
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      {/* start of modal*/}
      <StyledModal
        open={open}
        trigger={<div><FacultyCard title={facultyStrings.empowerment.title} image={empowerment} descriptionShort={facultyStrings.empowerment.description} /></div>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}>

        {/* modal header*/}
        <StyledHeader>

          {/* x in corner*/}

          <StyledIcon name='close' onClick={() => setOpen(false)} color='black' />


          {/* Header Text*/}
          <HWrapper>
            <StyledTitle>
              {facultyStrings.empowerment.title}
            </StyledTitle>
            <StyledDescription>
              {facultyStrings.empowerment.description}
            </StyledDescription>
          </HWrapper>
        </StyledHeader>

        {/* Modal Content*/}
        <StyledModalContent>
          {/* Start of Content*/}
          {facultyStrings.empowerment.popupLink === '' ?
            <PopupHead>
              {facultyStrings.empowerment.popupHead}
            </PopupHead> :
            <a href={facultyStrings.empowerment.popupLink}><PopupHead>{facultyStrings.empowerment.popupHead}</PopupHead></a>}

          {/* The various sections*/}
          {Object.entries(facultyStrings.empowerment.sections).map(([key, section]) => (
            <SectionWrapper>
              {section.link === '' ? <ListHead> {section.title} </ListHead> :
                <a href={section.link}><ListHead>{section.title}</ListHead></a>}
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
