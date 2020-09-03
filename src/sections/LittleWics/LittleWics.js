import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import studentStrings from '../../res/littleWicsStrings';
import {StudentCardGrid, ImageColumn, OfficeHour, OfficeHourWrapper, TextColumnR, AllOfficeHourWrapper, TextColumnL} from './styles';
import LittleWicsText from '../../components/LittleWicsText/LittleWicsText';
import officeHour from '../../res/images/student_officeHour.svg';
import careerMentor from '../../res/images/student_careerMentor.svg';
import community from '../../res/images/student_community.svg';
import {StyledSubSectionWrapper} from '../../res/globalStyles';
import {Image} from 'semantic-ui-react';


//LittleWics Events Component
class LittleWics extends Component {
  render() {
    return (
      <StyledSubSectionWrapper>
        {/* Title and Description*/}
        <SectionTitleDescription
          title={studentStrings.title}
          description={studentStrings.description}/>
        <StudentCardGrid>
          {/* 1st Card Image*/}
          <ImageColumn width={5}>
            <Image src={officeHour}/>
          </ImageColumn>
          <TextColumnR width={11}>
            {/* 1st Text*/}
            <LittleWicsText
              title={studentStrings.officeHours.title}
              description={studentStrings.officeHours.description}/>
            <AllOfficeHourWrapper>
              <OfficeHourWrapper>MONDAY <OfficeHour>{studentStrings.officeHours.mon}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>TUESDAY <OfficeHour>{studentStrings.officeHours.tues}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>WEDNESDAY <OfficeHour>{studentStrings.officeHours.wed}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>THURSDAY <OfficeHour>{studentStrings.officeHours.thurs}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>FRIDAY <OfficeHour>{studentStrings.officeHours.fri}</OfficeHour></OfficeHourWrapper>
            </AllOfficeHourWrapper>
          </TextColumnR>
        </StudentCardGrid>

        {/* 2nd Card*/}
        <StudentCardGrid>
          <TextColumnL width={11}>
            {/* 2nd Card Text*/}
            <LittleWicsText
              title={studentStrings.careerMentorship.title}
              description={studentStrings.careerMentorship.description}/>
          </TextColumnL>
          {/* 2nd Card Image*/}
          <ImageColumn width={5}>
            <Image src={careerMentor}/>
          </ImageColumn>
        </StudentCardGrid>

        {/* 3rd Card */}
        <StudentCardGrid>
          {/* 3rd Card Image*/}
          <ImageColumn width={5}>
            <Image src={community}/>
          </ImageColumn>
          {/* 3rd Card Text*/}
          <TextColumnR width={11}>
            <LittleWicsText
              title={studentStrings.community.title}
              description={studentStrings.community.description}/>
          </TextColumnR>
        </StudentCardGrid>
      </StyledSubSectionWrapper>
    )
  }
}

export default LittleWics;

