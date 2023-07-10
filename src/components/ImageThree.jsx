import { Parallax } from "react-parallax";
import spaceThree from "../images/nasa-3.jpg";

const ImageThree = () => (
  <Parallax className="image" bgImage={spaceThree} strength={800}>
    <div className="content">
      <span className="img-txt">A trip to Space.</span>
    </div>
  </Parallax>
);

export default ImageThree;
