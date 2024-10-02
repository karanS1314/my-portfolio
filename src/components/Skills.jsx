
import Marquee from "react-fast-marquee";
import { Container, Img, ImgWrap, Heading } from "./MarqElements";
import b1 from "../../../assets/images/MainImages/MarqueeImages/brand1.webp";
import b2 from "../../../assets/images/MainImages/MarqueeImages/brand2.webp";
import b3 from "../../../assets/images/MainImages/MarqueeImages/brand3.webp";
import b4 from "../../../assets/images/MainImages/MarqueeImages/brand4.webp";
import b5 from "../../../assets/images/MainImages/MarqueeImages/brand5.webp";
import b6 from "../../../assets/images/MainImages/MarqueeImages/brand6.webp";
import b7 from "../../../assets/images/MainImages/MarqueeImages/brand7.webp";
import b8 from "../../../assets/images/MainImages/MarqueeImages/brand8.webp";
import b9 from "../../../assets/images/MainImages/MarqueeImages/brand9.webp";

const Skills = () => {
  return (
    <>
      <Container>
        <Heading>Trusted by</Heading>
        <Marquee speed="100">
          <ImgWrap>
            <Img src={b1} />
          </ImgWrap>
          <ImgWrap>
            <Img src={b2} />
          </ImgWrap>
          <ImgWrap>
            <Img src={b3} />
          </ImgWrap>
          <ImgWrap>
            <Img src={b4} />
          </ImgWrap>
          <ImgWrap>
            <Img src={b5} />
          </ImgWrap>
          <ImgWrap>
            <Img src={b6} />
          </ImgWrap>
          <ImgWrap>
            <Img src={b7} />
          </ImgWrap>
          <ImgWrap>
            <Img src={b8} />
          </ImgWrap>
          <ImgWrap>
            <Img src={b9} />
          </ImgWrap>
        </Marquee>
      </Container>
    </>
  );
};

export default MarqueeSection;
