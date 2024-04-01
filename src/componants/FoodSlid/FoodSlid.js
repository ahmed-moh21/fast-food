import Carousel from "react-bootstrap/Carousel";
import image1 from "../Asset/burgers-/5595454.jpg";
import image2 from "../Asset/people-taking-photos-food.jpg";
import image3 from "../Asset/top-view.jpg";
import "./FoodSlid.css";

function CarouselFade() {
  return (
    <div className="slid-contain">
      <Carousel fade>
        <Carousel.Item>
          <img className="img-slid" alt=" logo App" src={image1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-slid" alt=" logo App" src={image2} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-slid" alt=" logo App" src={image3} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFade;
