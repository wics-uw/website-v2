import React, {Component} from 'react';
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import numberStrings from "../../res/numberStrings";
import {GridColumn} from "semantic-ui-react";
import {StyledNumberCardsWrapper, NumbersWrapper} from "./styles"; 
import NumberCard from "../../components/NumberCard/NumberCard";


class Numbers extends Component {
    render (){
        return (
            <NumbersWrapper>
                {/*Section title & description*/}
                <SectionTitleDescription
                title={numberStrings.title}
                description={numberStrings.description}
                link={numberStrings.href}
                linkName={numberStrings.linkName}/>
                {/*Number cards*/}
                <StyledNumberCardsWrapper columns={3}>
                    <GridColumn>
                        {/* Number Card 1*/}
                        <NumberCard
                            number={numberStrings.firstCard.number}
                            description={numberStrings.firstCard.description}/>
                    </GridColumn>
                    <GridColumn>
                        {/* Number Card 2*/}
                        <NumberCard
                            number={numberStrings.secondCard.number}
                            description={numberStrings.secondCard.description}/>
                    </GridColumn>
                    <GridColumn>
                        {/* Number Card 3*/}
                        <NumberCard
                            number={numberStrings.thirdCard.number}
                            description={numberStrings.thirdCard.description}/>
                    </GridColumn>
                </StyledNumberCardsWrapper>
                
            </NumbersWrapper>
            
        )
    }
}

export default Numbers;