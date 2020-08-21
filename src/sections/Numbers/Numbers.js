import React, {Component} from 'react';
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import strings from "../../res/numberStrings";
import {GridColumn} from "semantic-ui-react";
import {StyledNumberCardsWrapper, NumbersWrapper} from "./styles"; 
import NumberCard from "../../components/NumberCard/NumberCard";


class Numbers extends Component {
    render (){
        return (
            <NumbersWrapper>
                {/*Section title & description*/}
                <SectionTitleDescription
                title={strings.title}
                description={strings.description}
                link={strings.href}
                linkName={strings.linkName}/>
                {/*Number cards*/}
                <StyledNumberCardsWrapper columns={3}>
                    <GridColumn>
                        {/* Number Card 1*/}
                        <NumberCard
                            number={strings.firstCard.number}
                            description={strings.firstCard.description}/>
                    </GridColumn>
                    <GridColumn>
                        {/* Number Card 2*/}
                        <NumberCard
                            number={strings.secondCard.number}
                            description={strings.secondCard.description}/>
                    </GridColumn>
                    <GridColumn>
                        {/* Number Card 3*/}
                        <NumberCard
                            number={strings.thirdCard.number}
                            description={strings.thirdCard.description}/>
                    </GridColumn>
                </StyledNumberCardsWrapper>
                
            </NumbersWrapper>
            
        )
    }
}

export default Numbers;