import { Parallax } from "react-parallax";
import spaceTwo from "../images/nasa-2.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={spaceTwo} strength={800}>
    <div className="content">
      <span className="img-txt">A trip to Space.</span>
    </div>
  </Parallax>
);

export default ImageTwo;
