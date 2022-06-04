import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import photo1 from "../../res/images/events/assets1.jpg";
//import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://media.cntraveler.com/photos/61eae294c43ef397991bf238/master/w_2240%2Cc_limit/British%2520Virgin%2520Islands_GettyImages-973996210.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://media.cntraveler.com/photos/61fd970c59791c9509115bc1/master/w_2240%2Cc_limit/Mykonos_GettyImages-1158886258.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://media.cntraveler.com/photos/61eae28b9580ae68b5219061/master/w_2240%2Cc_limit/Bermuda_GettyImages-1159363129.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel;