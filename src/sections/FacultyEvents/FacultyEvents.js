import React from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import facultyStrings from '../../res/facultyStrings';
import {GridColumn} from 'semantic-ui-react';
import {StyledEventsWrapper, CloseStyled} from './styles';
import FacultyCard from '../../components/FacultyCard/FacultyCard';
import sponsored from '../../res/images/sponsored.svg';
import outreach from '../../res/images/outreach.svg';
import techConference from '../../res/images/techconference.svg';
import { Header, Modal, Icon } from 'semantic-ui-react';

function FacultyEvents() {
    const [open, setOpen] = React.useState(false)
        return (
            <div>
                <SectionTitleDescription 
                title={facultyStrings.title}
                description={facultyStrings.description}/>
                <StyledEventsWrapper columns={3}>
                    <GridColumn>
                        
                        <Modal
                            open={open}
                            trigger={<div><FacultyCard title={facultyStrings.sponsored.title} image={sponsored} descriptionShort={facultyStrings.sponsored.description}/></div>}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}>
                            <Header>{facultyStrings.sponsored.title}</Header> 
                            <Modal.Content>
                                <p>
                                {facultyStrings.sponsored.description}
                                </p>
                            </Modal.Content>
                        </Modal>
                    </GridColumn>
                    <GridColumn>
                        <Modal
                            open={open}
                            trigger={<div><FacultyCard title={facultyStrings.tech.title} image={techConference} descriptionShort={facultyStrings.tech.description}/></div>}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}>
                            <Header>
                                {facultyStrings.tech.title}
                                <CloseStyled icon='close' onClick={() => setOpen(false)} />
                            </Header> 
                            <Modal.Content>
                                <p>
                                {facultyStrings.tech.description}
                                </p>
                            </Modal.Content>
                        </Modal>
                    </GridColumn>
                    <GridColumn>
                        <Modal 
                            open={open}
                            trigger={<div><FacultyCard title={facultyStrings.outreach.title} image={outreach} descriptionShort={facultyStrings.outreach.description}/></div>}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}>
                            <Header>{facultyStrings.outreach.title}
                                <Icon icon='close' onClick={() => setOpen(false)} />
                            </Header> 
                            <Modal.Content>
                                <p>
                                {facultyStrings.outreach.description}
                                </p>
                            </Modal.Content>
                        </Modal>
                    </GridColumn>
                </StyledEventsWrapper>
            </div>
        )
    
}

export default FacultyEvents;