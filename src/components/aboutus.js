import Carousel from "react-bootstrap/Carousel";
import Mainslide1 from "../images/Mainslide1.png";
function AboutUs() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <div className="row" style={{ backgroundColor: "white" }}>
          <div className="col-md-4 col-sm-12">
            <img
              style={{ width: "100%", height: "auto" }}
              src={Mainslide1}
              alt=" not available"
            />
          </div>
          <div className="col-md-8 col-sm-12 p-3">
            <h1 style={{ color: "black" }}>About Us</h1>
            <p
              style={{
                color: "black",
                fontWeight: "600",
                textAlign: "justify",
              }}
            >
              {" "}
              Welcome to Y-Kart!
              We are a team of passionate entrepreneurs who founded Y-Kart with a mission to provide our customers with high-quality products at competitive prices.
              Our journey began in 2022 when we noticed a gap in the market for affordable yet durable products. We set out to bridge that gap by partnering with trusted suppliers and manufacturers from around the world to bring you an extensive range of products that meet our strict quality standards.At Y-Kart, we believe that customer satisfaction is key to our success. That's why we are committed to providing you with an exceptional shopping experience, from browsing our website to receiving your order at your doorstep.
              We take pride in our dedication to customer service and strive to exceed your expectations every time you shop with us. Our team is always ready to assist you with any queries or concerns you may have, and we welcome your feedback and suggestions to help us improve our services.
              Thank you for choosing Y-Kart as your preferred online shopping destination. We hope you enjoy your shopping experience with us!
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutUs;
