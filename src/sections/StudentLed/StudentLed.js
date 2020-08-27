import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import studentStrings from '../../res/studentStrings';
import {StudentImgL, StudentImgR, OfficeHour,OfficeHourWrapper, StudentTextWrapperOH, StudentTextWrapperCM, StudentTextWrapperCB, StudentCard, StudentTextWrapper } from './styles';
import StudentText from '../../components/StudentText/StudentText';
import officeHour from '../../res/images/student_officeHour.svg';
import careerMentor from '../../res/images/student_careerMentor.svg';
import community from '../../res/images/student_community.svg';



class StudentLed extends Component {
    render(){
        return (
            <div>
                <SectionTitleDescription 
                title={studentStrings.title}
                description={studentStrings.description} />
                <StudentCard>
                    <StudentImgL src={officeHour} />
                    <StudentTextWrapper>
                        <StudentTextWrapperOH>
                        
                            <StudentText
                                title={studentStrings.officeHours.title}
                                description={studentStrings.officeHours.description}/>
                            <OfficeHourWrapper>MONDAY: <OfficeHour>{studentStrings.officeHours.mon}</OfficeHour></OfficeHourWrapper>
                            <OfficeHourWrapper>TUESDAY: <OfficeHour>{studentStrings.officeHours.tues}</OfficeHour></OfficeHourWrapper>
                            <OfficeHourWrapper>WEDNESDAY: <OfficeHour>{studentStrings.officeHours.wed}</OfficeHour></OfficeHourWrapper>
                            <OfficeHourWrapper>THURSDAY: <OfficeHour>{studentStrings.officeHours.thurs}</OfficeHour></OfficeHourWrapper>
                            <OfficeHourWrapper>FRIDAY: <OfficeHour>{studentStrings.officeHours.fri}</OfficeHour></OfficeHourWrapper>
                        
                        </StudentTextWrapperOH>
                    </StudentTextWrapper>
                </StudentCard>
                <StudentCard>
                    <StudentImgR src={careerMentor} />
                    <StudentTextWrapper>
                        <StudentTextWrapperCM>
                            <StudentText
                                title={studentStrings.careerMentorship.title}
                                description={studentStrings.careerMentorship.description}/>
                        </StudentTextWrapperCM>
                    </StudentTextWrapper>
                </StudentCard>
                <StudentCard>
                <StudentImgL src={community} />
                <StudentTextWrapper>
                    <StudentTextWrapperCB>
                        <StudentText
                            title={studentStrings.community.title}
                            description={studentStrings.community.description}/>
                    </StudentTextWrapperCB>
                </StudentTextWrapper>
                </StudentCard>
            </div>
        )
    }
};

export default StudentLed;

