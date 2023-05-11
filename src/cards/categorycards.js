
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";

import "./categorycard.css";

function CategoryCard(props) {
  //use navigate
  const navigate = useNavigate();

  const productdetails = () => {
    navigate(`/productdetails/${props.productData._id}`);
    // console.log(props.productData);
  };
  return (
    <div>
      <Card
        id="cardHover"
        onClick={() => {
          productdetails();
        }}
        style={{}}
      >
        {/**here setmodalshow will show modal on click */}

        <Card.Img
          variant="top"
          src={props.productData.Image}
          id="cardimg"
          style={{}}
        />
        <Card.Text
          style={{ fontSize: "10px", marginTop: "-7px", fontWeight: "700" }}
        >
          {props.productData.ProductName}
        </Card.Text>
      </Card>
    </div>
  );
}
export default CategoryCard;
