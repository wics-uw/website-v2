import React from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import bigWicsStrings from '../../res/strings/bigWicsStrings';
import {StyledEventsWrapper, StyledGridColumn} from './styles';
import {StyledSubSectionWrapper} from "../../res/globalStyles";
import BigWicsModal from "../../components/BigWicsModal/BigWicsModal";
import industry from "../../res/images/big_wics_industry.svg";
import empowerment from "../../res/images/big_wics_empowerment.svg";
import outreach from "../../res/images/big_wics_outreach.svg";


//function for BigWiCS Events
function BigWiCS() {
  return (
    <StyledSubSectionWrapper>
      {/* Title and Description */}
      <SectionTitleDescription
        title={bigWicsStrings.title}
        description={bigWicsStrings.description}/>

      {/* Cards Wrapper */}
      <StyledEventsWrapper columns={3}>
        {/* First Event */}
        <StyledGridColumn>
          <BigWicsModal
            cardTitle={bigWicsStrings.industry.title}
            cardImage={industry}
            cardDescription={bigWicsStrings.industry.description}
            modalTitle={bigWicsStrings.industry.title}
            modalTitleLink={bigWicsStrings.industry.popupLink}
            modalDescription={bigWicsStrings.industry.description}
            contentDescription={bigWicsStrings.industry.contentDescription}
            sectionContent={bigWicsStrings.industry.sections}
            listContent={true}>
          </BigWicsModal>
        </StyledGridColumn>

        {/* Second Event */}
        <StyledGridColumn>
          <BigWicsModal
            cardTitle={bigWicsStrings.empowerment.title}
            cardImage={empowerment}
            cardDescription={bigWicsStrings.empowerment.description}
            modalTitle={bigWicsStrings.empowerment.title}
            modalTitleLink={bigWicsStrings.industry.popupLink}
            modalDescription={bigWicsStrings.empowerment.description}
            contentDescription={bigWicsStrings.empowerment.contentDescription}
            sectionContent={bigWicsStrings.empowerment.sections}>
          </BigWicsModal>
        </StyledGridColumn>

        {/* Third Event */}
        <StyledGridColumn>
          <BigWicsModal
            cardTitle={bigWicsStrings.outreach.title}
            cardImage={outreach}
            cardDescription={bigWicsStrings.outreach.description}
            modalTitle={bigWicsStrings.outreach.title}
            modalTitleLink={bigWicsStrings.outreach.popupLink}
            modalDescription={bigWicsStrings.outreach.description}
            contentDescription={bigWicsStrings.outreach.contentDescription}
            sectionContent={bigWicsStrings.outreach.sections}>
          </BigWicsModal>
        </StyledGridColumn>
      </StyledEventsWrapper>
    </StyledSubSectionWrapper>
  )

}

export default BigWiCS;