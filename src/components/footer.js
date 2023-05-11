import "../components/footer.css";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

function Footer() {
  //navigate defining
  const navigate = useNavigate();
  //go to search API
  const ToSearch = () => {
    navigate("/searchpage");
  };
  return (
    <div id="footer">
      <div className="backtotop">
        <div
          className="col-sm-12"
          style={{
            backgroundColor: "black",
            color: "black",
            textAlign: "center",
          }}
        >
          <a style={{ color: "white", fontStyle: "none" }} href="#">
            Go Back To Top
          </a>
        </div>
      </div>

      
<div className="row">
          <div className="col-sm-12">
            Copyrights &copy; E-commerce @Y-Kart 2023-24
          </div>
    </div>
    
  </div>);
}
export default Footer;
