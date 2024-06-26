import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import React from "react";

import pic1 from "../../res/images/carousel/S22_EOT_Plant_Potting.JPG"
import pic2 from "../../res/images/carousel/W20_BOT2.jpg";
import pic3 from "../../res/images/carousel/Club_Fair.jpg";
import pic4 from "../../res/images/carousel/Technovation_EOT2.jpg";
import pic5 from "../../res/images/carousel/Technovation_EOT.jpg";
import pic6 from "../../res/images/carousel/W22_Exec_Social.jpg";
import pic7 from "../../res/images/carousel/academicResearch.jpg"
import pic8 from "../../res/images/carousel/cookieDec.jpg"
//import pic9 from "../../res/images/carousel/S24_Potting_BOT1.jpg"
//import pic10 from "../../res/images/carousel/S24_Potting_BOT2.jpg"

const elements = [
  [pic1, "Spring 2022 End of Term Plant Potting Event"],
  [pic2, "Winter 2020 Beginning of Term Event"],
  [pic3, "WiCS Booth at the Clubs Fair"],
  [pic4, "Technovation End of Term Celebration"],
  [pic5, "Technovation End of Term Celebration"],
  [pic6, "Winter 2022 Exec Social"],
  [pic7, "Fall 2022 Acamdemic Research Panel"],
  [pic8, "Fall 2022 Cookie Decorating"]
//  [pic9, "Spring 2024 Plant Potting BOT"]
//  [pic10, "Spring 2024 Plant Potting BOT"]
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: -0.5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: -0.5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: -0.5
  }
};

const PastEventsCard = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisible
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >

      {elements.map(element => {
        return (
          <div>
            <Image
              draggable={false}
              style={{ width: "100%", height: "100%", borderRadius: "10px"}}
              src={element[0]}
            />
            <div>
              <div id="desc-text">{element[1]}</div>
            </div>
          </div>
        );
      })}

    </Carousel>
  );
};

export default PastEventsCard;