import React from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import facultyStrings from '../../res/bigWiCSStrings';
import { StyledEventsWrapper, StyledGridColumn } from './styles';
import ModalIndustry from '../../components/ModalIndustry/ModalIndustry';
import ModalEmpowerment from '../../components/ModalEmpowerment/ModalEmpowerment';
import ModalOutreach from '../../components/ModalOutreach/ModalOutreach';
import {StyledSubSectionWrapper} from "../../res/globalStyles";
 

//function for BigWiCS Events
function BigWiCS() {
    return (
        <StyledSubSectionWrapper>
            {/* Title and Description */}
            <SectionTitleDescription
                title={facultyStrings.title}
                description={facultyStrings.description} />
            
            {/* Cards Wrapper */}
            <StyledEventsWrapper columns={3}>
                 {/* First Event */}
                <StyledGridColumn>
                    <ModalIndustry />
                </StyledGridColumn>

                 {/* Second Event */}
                <StyledGridColumn>
                    <ModalEmpowerment />
                </StyledGridColumn>

                 {/* Third Event */}
                <StyledGridColumn>
                    <ModalOutreach />
                </StyledGridColumn>
            </StyledEventsWrapper>
        </StyledSubSectionWrapper>
    )

}

export default BigWiCS;