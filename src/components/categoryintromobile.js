/*
                                      Thought Note

This code block component is later called by Home.js file to show Category intros 

The code defines a function called CategoryIntro, which  is a component that 
displays several categories of products, such as laptops, watches, tablets, smartphones,
 and electronics.

The useSelector hook is used to select data from the Redux store related to the user. 

The CONFIG_OBJ object is created to configure the authorization headers for requests that
 require authorization.


 */

import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CategoryCardLaptop from "../cards/categorycards";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
/*
   The component uses the useState hook to define state variables for each category of products, 
   such as alllaptops, allwatches, alltablets, etc.
   
   These state variables are initialized with an empty array.
   
   */

function CategoryIntromobile() {
  //decalring useNavigate
  const navigate = useNavigate();
  //useselector // react hook used to select the data
  const user = useSelector((state) => state.user);
  //creating config_obj to configure the authorized user
  const CONFIG_OBJ = {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  // For Laptops
  const [alllaptops, setalllaptops] = useState([]);
  const GetAllLaptops = async () => {
    const response = await axios.get(`${API_BASE_URL}/laptop`);
    //debugger;
    if (response.status === 200) {
      setalllaptops(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };

  

  useEffect(() => {
    GetAllLaptops();
  }, []);

  /*
     
     The deleteProduct function sends a DELETE request to the API_BASE_URL with the endpoint 
     /deletepost/:productId, where :productId is the ID of the product to be deleted. 
     
     The CONFIG_OBJ object is passed as the second argument to the axios.delete function to 
     include authorization headers. 
   
   
     If the response status is 200, the GetAllLaptops function is called to refetch the data.
     
     
     */
  //API call for delete post
  const deleteProduct = async (productId) => {
    console.log(productId);
    //debugger;
    const response = await axios.delete(
      `${API_BASE_URL}/deletepost/${productId}`,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      GetAllLaptops();
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };

  //For Watches

  const [allwatches, setallwatches] = useState([]);
  const GetAllWatches = async () => {
    const response = await axios.get(`${API_BASE_URL}/watch`);
    //debugger;
    if (response.status === 200) {
      setallwatches(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  useEffect(() => {
    GetAllWatches();
  }, []);

  //For Tablets
  const [alltablets, setalltablets] = useState([]);
  const GetAllTablets = async () => {
    const response = await axios.get(`${API_BASE_URL}/tablet`);
    //debugger;
    if (response.status === 200) {
      setalltablets(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  useEffect(() => {
    GetAllTablets();
  }, []);

  //For Smart Phones
  const [allsmartphones, setallsmartphones] = useState([]);
  const GetAllSamrtPhones = async () => {
    const response = await axios.get(`${API_BASE_URL}/smartphone`);
    //debugger;
    if (response.status === 200) {
      setallsmartphones(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  useEffect(() => {
    GetAllSamrtPhones();
  }, []);

  //For electronics
  const [allelectronics, setallelectronics] = useState([]);
  const GetAllElectronics = async () => {
    const response = await axios.get(`${API_BASE_URL}/electronics`);
    //debugger;
    if (response.status === 200) {
      setallelectronics(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  useEffect(() => {
    GetAllElectronics();
  }, []);
  //profilepage
  const Profilepage = () => {
    navigate("/profilebuyer");
  };

  //go to Laptop APi
  const Tolaptop = () => {
    navigate("/laptop");
  };
  //go to Watches API
  const Towatch = () => {
    navigate("/watches");
  };

  //go to smartPhone
  const Tosmartphone = () => {
    navigate("/smartphones");
  };
  //go to electronics API
  const Toelectronics = () => {
    navigate("/electronics");
  };

  //go to login as seller
  const Tologinseller = () => {
    navigate("/loginasseller");
  };
  return (
    <div className="desktop view">
      <div className="row">
        {/**Intro for Electronics */}
        <div className="col-6" id="mobileviewelectronic">
          <Card
            style={{ width: "100%", height: "250px", border: "1px solid gray" }}
            className="shadow-md m-1 p-1"
          >
            <Card.Title style={{ textAlign: "center" }}>
              <p style={{ textAlign: "center" }}>
                <h5>
                  Upto 70% off on Electronics<Badge bg="secondary">New</Badge>
                </h5>
              </p>
            </Card.Title>
            <Card.Img
              variant="top"
              style={{ height: "150px" }}
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>THE PREMIUM TECH</Card.Body>
          </Card>
          <Card
            className="shadow-md "
            style={{
              marginLeft: "5px",
              width: "100%",
              border: "1px solid gray",
            }}
          >
            <Card.Body onClick={() => Tolaptop()}>Know more</Card.Body>
          </Card>
        </div>
        {/**Intro for Laptops */}
        <div className="col-6" id="mobileviewLaptop">
          <Card
            style={{
              width: "100%",
              height: "317px",
              overflow: "hidden",
              border: "1px solid gray",
            }}
            className="shadow-md m-2 p-3 "
          >
            <Card.Title style={{ textAlign: "center" }}>
              Upto 60% off{" "}
            </Card.Title>
            <Row xs={1} md={2} className="g-4">
              {alllaptops
                .map((viewproduct) => (
                  <Col>
                    <br></br>
                    <CategoryCardLaptop
                      productData={viewproduct}
                      deleteproduct={deleteProduct}
                      GetAllLaptops={GetAllLaptops}
                    />
                  </Col>
                ))
                .reverse()}
            </Row>
          </Card>
        </div>
        {/**Intro for Smart Watches */}
        <div className="col-6">
          <Card
            style={{
              width: "100%",
              height: "317px",
              overflow: "hidden",
              border: "1px solid gray",
            }}
            className="shadow-md m-2 p-3 "
          >
            <Card.Title style={{ textAlign: "center" }}>
              Watches-Upto 60% off{" "}
            </Card.Title>
            <Row xs={1} md={2} className="g-4">
              {allwatches
                .map((viewproduct) => (
                  <Col>
                    <br></br>
                    <CategoryCardLaptop
                      productData={viewproduct}
                      deleteproduct={deleteProduct}
                      GetAllLaptops={GetAllLaptops}
                    />
                  </Col>
                ))
                .reverse()}
            </Row>
          </Card>
          <Card
            className="shadow-md "
            style={{
              marginLeft: "10px",
              width: "100%",
              border: "1px solid gray",
            }}
          >
            <Card.Body onClick={() => Towatch()}>
              <Card.Text>
                Get upto 60% off on all Smart Watche products. Hurry,limited
                offer
              </Card.Text>
              Know more
            </Card.Body>
          </Card>
        </div>
        {/**Intro for Profile /seller */}
        <div className="col-6">
          <div className="row">
            <div className="col-sm-12">
              {localStorage.getItem("token") ? (
                <Card className="m-2" style={{ width: "95%" }}>
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                      <Card.Img
                        variant="top"
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "100px",

                          marginTop: "5px",
                          marginLeft: "-40px",
                        }}
                        src={user.ProfileImg}
                      />
                    </div>
                    <div className="col-4"></div>
                  </div>

                  <Card.Body>
                    <Card.Title>{user.FullName}</Card.Title>
                    <Card.Text>user since 2015</Card.Text>{" "}
                    <Button
                      onClick={() => Profilepage()}
                      className="form-control btn btn-danger mb-1"
                    >
                      View Profile
                    </Button>{" "}
                    <Button
                      onClick={() => Tologinseller()}
                      className="form-control btn btn-warning"
                    >
                      Become a seller
                    </Button>
                  </Card.Body>
                </Card>
              ) : (
                <Card>
                  <Card.Title>Flat 30% off on all deals ,Hurry </Card.Title>
                  <Card.Body>
                    {/**First slide advertisment */}
                    <Carousel style={{ width: "100%", display: "inlineBlock" }}>
                      <Carousel.Item interval={1000}>
                        <img
                          style={{
                            width: "450px",
                            height: "210px",
                            float: "left",
                          }}
                          src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/86117e9d-4079-4231-9854-21bbc04852d0._CR0,0,1200,628_SX460_QL70_.png"
                          alt="Advertisement here"
                        ></img>
                      </Carousel.Item>
                      <Carousel.Item interval={500}>
                        <img
                          style={{
                            width: "450px",
                            height: "210px",
                            float: "left",
                          }}
                          src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1d3109c1-b616-4519-813d-5ab3907c9fef._CR0,0,1200,628_SX460_QL70_.jpg"
                          alt="Advertisement here"
                        ></img>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          style={{
                            width: "450px",
                            height: "210px",
                            float: "left",
                          }}
                          src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c4b70438-7f2b-4e61-a5bd-f9d34145e3f6._CR0,0,1200,628_SX460_QL70_.jpg"
                          alt="Advertisement here"
                        ></img>
                      </Carousel.Item>
                    </Carousel>
                  </Card.Body>
                </Card>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Card
                className="m-2"
                style={{
                  width: "95%",
                  height: "50%",
                  border: "1px solid gray",
                }}
              >
                <Card.Img
                  variant="top"
                  style={{ height: "200px" }}
                  id="addinprofileview"
                  src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/**Intro for Tablets */}
        <div className="col-6">
          <Card
            style={{
              width: "100%",
              height: "317px",
              overflow: "hidden",
              border: "1px solid gray",
            }}
            className="shadow-md m-2 p-3 "
          >
            <Card.Title style={{ textAlign: "center" }}>
              Tablets-Upto 60% off{" "}
            </Card.Title>
            <Row xs={1} md={2} className="g-4">
              {alltablets
                .map((viewproduct) => (
                  <Col>
                    <br></br>
                    <CategoryCardLaptop
                      productData={viewproduct}
                      deleteproduct={deleteProduct}
                      GetAllLaptops={GetAllLaptops}
                    />
                  </Col>
                ))
                .reverse()}
            </Row>
          </Card>
          <Card
            className="shadow-md "
            style={{
              marginLeft: "10px",
              width: "100%",
              border: "1px solid gray",
            }}
          >
            <Card.Body onClick={() => Tolaptop()}>
              <Card.Text>
                Get upto 60% off on all Tablets .Hurry,limited offer
              </Card.Text>
              Know more
            </Card.Body>
          </Card>
        </div>
        {/**Intro for Smart Phones */}
        <div className="col-6">
          <Card
            style={{
              width: "100%",
              height: "317px",
              overflow: "hidden",
              border: "1px solid gray",
            }}
            className="shadow-md m-2 p-3 "
          >
            <Card.Title style={{ textAlign: "center" }}>
              Smart Phones-Upto 60% off{" "}
            </Card.Title>
            <Row xs={1} md={2} className="g-4">
              {allsmartphones
                .map((viewproduct) => (
                  <Col>
                    <br></br>
                    <CategoryCardLaptop
                      productData={viewproduct}
                      deleteproduct={deleteProduct}
                      GetAllLaptops={GetAllLaptops}
                    />
                  </Col>
                ))
                .reverse()}
            </Row>
          </Card>
          <Card
            className="shadow-md "
            style={{
              marginLeft: "10px",
              width: "100%",
              border: "1px solid gray",
            }}
          >
            <Card.Body onClick={() => Tosmartphone()}>
              <Card.Text>
                Get upto 60% off on all Smart Phones .limited offer
              </Card.Text>
              Know more
            </Card.Body>
          </Card>
        </div>
        {/**Intro for Other Electronocs*/}
        <div className="col-lg-3 col-sm-12">
          <Card
            style={{
              width: "100%",
              height: "550px",
              overflow: "hidden",
              border: "1px solid gray",
            }}
            className="shadow-md m-2 p-3 "
          >
            <Card.Title style={{ textAlign: "center" }}>
              Smart Electronics-Upto 60% off{" "}
            </Card.Title>
            <Row xs={1} md={2} className="g-4">
              {allelectronics
                .map((viewproduct) => (
                  <Col>
                    <br></br>
                    <CategoryCardLaptop
                      productData={viewproduct}
                      deleteproduct={deleteProduct}
                      GetAllLaptops={GetAllLaptops}
                    />
                  </Col>
                ))
                .reverse()}
            </Row>
          </Card>
          <Card
            className="shadow-md "
            style={{
              marginLeft: "10px",
              width: "100%",
              border: "1px solid gray",
            }}
          >
            <Card.Body onClick={() => Toelectronics()}>
              <Card.Text>
                Get upto 60% off on all Electronics.Hurry,limited offer
              </Card.Text>
              Know more
            </Card.Body>
          </Card>
        </div>

        {/**Intro for Other Electronocs*/}
        <div className="col-lg-3 col-sm-12">
          <Card
            style={{ width: "100%", height: "550px", border: "1px solid gray" }}
            className="shadow-md m-1 p-1"
          >
            <Card.Title style={{ textAlign: "center" }}>
              <p style={{ textAlign: "center" }}>
                <h5>
                  Upto 70% off on Electronics<Badge bg="secondary">New</Badge>
                </h5>
              </p>
            </Card.Title>
            <Card.Img
              variant="top"
              style={{ height: "480px" }}
              src="https://images.unsplash.com/photo-1536412597336-ade7b523ecfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
          </Card>
          <Card
            className="shadow-md "
            style={{
              marginLeft: "10px",
              width: "100%",
              border: "1px solid gray",
            }}
          >
            <Card.Body onClick={() => Tolaptop()}>
              <Card.Text>
                Get Season clearence deals with upto 70% off . Hurry,limited
                offer
              </Card.Text>
              Know more
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default CategoryIntromobile;
