import React, {Component} from 'react';
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import titleStrings from "../../res/strings";
import {GridColumn} from "semantic-ui-react";
import {StyledNumberCardsWrapper, NumbersWrapper} from "./styles"; 
import NumberCard from "../../components/NumberCard/NumberCard";


class Numbers extends Component {
    render (){
        return (
            <NumbersWrapper>
                {/*Section title & description*/}
                <SectionTitleDescription
                title={titleStrings.numbers.title}
                description={titleStrings.numbers.description}
                link={titleStrings.numbers.href}
                linkName={titleStrings.numbers.linkName}/>
                {/*Number cards*/}
                <StyledNumberCardsWrapper columns={3}>
                    <GridColumn>
                        {/* Number Card 1*/}
                        <NumberCard
                            number={titleStrings.numbers.firstCard.number}
                            description={titleStrings.numbers.firstCard.description}/>
                    </GridColumn>
                    <GridColumn>
                        {/* Number Card 2*/}
                        <NumberCard
                            number={titleStrings.numbers.secondCard.number}
                            description={titleStrings.numbers.secondCard.description}/>
                    </GridColumn>
                    <GridColumn>
                        {/* Number Card 3*/}
                        <NumberCard
                            number={titleStrings.numbers.thirdCard.number}
                            description={titleStrings.numbers.thirdCard.description}/>
                    </GridColumn>
                </StyledNumberCardsWrapper>
                
            </NumbersWrapper>
            
        )
    }
}

export default Numbers;