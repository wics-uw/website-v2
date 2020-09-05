import React from 'react';
import BigWicsCard from '../BigWicsCard/BigWicsCard';
import {
  HeaderWraooer,
  ListHeader,
  SectionWrapper,
  StyledHeader,
  StyledHeaderDescription,
  StyledHeaderTitle,
  StyledHeaderTitleLink,
  StyledIcon,
  Styledli,
  StyledLink,
  StyledModal,
  StyledModalContent,
  Styledul
} from "./styles";
import close from '../../res/images/modal_close.svg';


//Function for Industry Modal
export default function BigWicsModal(props) {

  // To control state
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {/* start of modal*/}
      <StyledModal
        open={open}
        trigger={
          <div>
            <BigWicsCard
              title={props.cardTitle}
              image={props.cardImage}
              descriptionShort={props.cardDescription}/>
          </div>
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}>
        {/* modal header*/}
        <StyledHeader>
          {/* x in corner*/}
          <StyledIcon src={close} onClick={() => setOpen(false)}/>
          {/* Header Text*/}
          <HeaderWraooer>
            {props.modalTitleLink !== ''
              ? <StyledHeaderTitle>
                <StyledHeaderTitleLink href={props.modalTitleLink} target="_blank">
                  {props.modalTitle}
                </StyledHeaderTitleLink>
              </StyledHeaderTitle>
              : <StyledHeaderTitle>
                {props.modalTitle}
              </StyledHeaderTitle>}
            <StyledHeaderDescription>
              {props.modalDescription}
            </StyledHeaderDescription>
          </HeaderWraooer>
        </StyledHeader>
        <StyledModalContent>
          {/*<StyledContentDescription>*/}
          {/*  {props.contentDescription}*/}
          {/*</StyledContentDescription>*/}
          {Object.entries(props.sectionContent).map(([key, section]) => (
            <SectionWrapper>
              {section.link === ''
                ? <ListHeader> {section.title} </ListHeader>
                : <ListHeader>
                  <StyledLink href={section.link} target="_blank">{section.title}</StyledLink>
                </ListHeader>}
              <Styledul>
                {Object.entries(section.desc).map(([key, text]) => (
                  props.listContent
                    ? <Styledli>- {text}</Styledli>
                    : <Styledli>{text}</Styledli>
                ))}
              </Styledul>
            </SectionWrapper>
          ))}
        </StyledModalContent>
      </StyledModal>
    </div>
  )
}
