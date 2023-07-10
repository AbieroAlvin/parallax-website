import { Parallax } from "react-parallax";
import spaceOne from "../images/nasa-1.jpg";

const ImageOne = () => (
  <Parallax className="image" bgImage={spaceOne} strength={800}>
    <div className="content">
      <span className="img-txt">A trip to Space.</span>
    </div>
  </Parallax>
);

export default ImageOne;
