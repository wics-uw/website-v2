import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import studentStrings from '../../res/littleWicsStrings';
import {
  StudentImgL,
  StudentImgR,
  OfficeHour,
  OfficeHourWrapper,
  StudentTextWrapperOH,
  StudentTextWrapperCM,
  StudentTextWrapperCB,
  StudentCard
} from './styles';
import LittleWicsText from '../../components/LittleWicsText/LittleWicsText';
import officeHour from '../../res/images/student_officeHour.svg';
import careerMentor from '../../res/images/student_careerMentor.svg';
import community from '../../res/images/student_community.svg';
import {StyledSubSectionWrapper} from '../../res/globalStyles';


//LittleWics Events Component
class LittleWics extends Component {
  render() {
    return (
      <StyledSubSectionWrapper>
        {/* Title and Description*/}
        <SectionTitleDescription
          title={studentStrings.title}
          description={studentStrings.description}/>
        {/* 1st Card*/}
        <StudentCard>
          {/* 1st Card Image*/}
          <StudentImgL src={officeHour}/>
          <StudentTextWrapperOH>
            {/* 1st Text*/}
            <LittleWicsText
              title={studentStrings.officeHours.title}
              description={studentStrings.officeHours.description}/>
            <OfficeHourWrapper>MONDAY: <OfficeHour>{studentStrings.officeHours.mon}</OfficeHour></OfficeHourWrapper>
            <OfficeHourWrapper>TUESDAY: <OfficeHour>{studentStrings.officeHours.tues}</OfficeHour></OfficeHourWrapper>
            <OfficeHourWrapper>WEDNESDAY: <OfficeHour>{studentStrings.officeHours.wed}</OfficeHour></OfficeHourWrapper>
            <OfficeHourWrapper>THURSDAY: <OfficeHour>{studentStrings.officeHours.thurs}</OfficeHour></OfficeHourWrapper>
            <OfficeHourWrapper>FRIDAY: <OfficeHour>{studentStrings.officeHours.fri}</OfficeHour></OfficeHourWrapper>
          </StudentTextWrapperOH>
        </StudentCard>

        {/* 2nd Card*/}
        <StudentCard>
          <StudentTextWrapperCM>
            {/* 2nd Card Text*/}
            <LittleWicsText
              title={studentStrings.careerMentorship.title}
              description={studentStrings.careerMentorship.description}/>
          </StudentTextWrapperCM>
          {/* 2nd Card Image*/}
          <StudentImgR src={careerMentor}/>
        </StudentCard>

        {/* 3rd Card */}
        <StudentCard>
          {/* 3rd Card Image*/}
          <StudentImgL src={community}/>
          {/* 3rd Card Text*/}
          <StudentTextWrapperCB>
            <LittleWicsText
              title={studentStrings.community.title}
              description={studentStrings.community.description}/>
          </StudentTextWrapperCB>
        </StudentCard>
      </StyledSubSectionWrapper>
    )
  }
};

export default LittleWics;

