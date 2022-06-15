import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import React from "react";

import pic1 from "../../res/images/carousel/W20_BOT2.jpg";
import pic2 from "../../res/images/carousel/Club_Fair.jpg";
import pic3 from "../../res/images/carousel/Technovation_EOT2.jpg";
import pic4 from "../../res/images/carousel/Technovation_EOT.jpg";
import pic5 from "../../res/images/carousel/W22_Exec_Social.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: -0.5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: -0.5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: -0.5
  }
};
const images = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
];

const PastEventsCard = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map(image => {
        return (
          <Image
            draggable={false}
            style={{ width: "100%", height: "100%", borderRadius: "10px"}}
            src={image}
          />
        );
      })}
    </Carousel>
  );
};

export default PastEventsCard;