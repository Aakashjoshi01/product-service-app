import React , { useState} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageUploading from "react-images-uploading";
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function App() {

  const [images, setImages] = React.useState([]);
  const [inputList, setInputList] = useState([{ otherName: ""}]);
  const maxNumber = 1;

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { otherName: "" }]);
  };

  // ////

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    plan: "",
    price: "",
    billing: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { firstName, plan, price, billing } = formData;
//



  return (
    <div style={{ textAlign:"left!important"}}>
     <Container  fluid="md" >
      <h2 style={{ textAlign:"center", paddingTop:"40px"}}>Create Product or Service</h2>
    <div className="App">
       <form>
       <Row>
        <h4>General Info</h4>
      </Row>
        <Row justify={"left"} alignItems={"left"} spacing={1}>
        <Col lg={6} sm={12}>  
        <Form.Label>Product Name</Form.Label>
            <input
            value={firstName}
            onChange={e => updateFormData(e)}
            placeholder="E.g. Website Maintainance , SEO etc"
            type="text"
            name="firstName"
            required
          />
      </Col>
      
      <Col lg={6} sm={12}>
      <Form.Label>Product Image</Form.Label> 
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Row>
              <Col lg={3}> <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              +
            </button></Col>
              <Col lg={9}>
              {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <ul className="imagecustom">
                  <li><img src={image.data_url} alt="" /></li>
                  <li> <button onClick={() => onImageUpdate(index)}>Edit</button></li>
                  <li><button onClick={() => onImageRemove(index)}>Remove</button></li>
                </ul>
               
              </div>
            ))}</Col>
            </Row>
 
         
          </div>
        )}
      </ImageUploading>
      <p>upload a Squire image that doesn't exceed 2mb</p>
      </Col>
      </Row>
      <Row >
        <h4>Pricing Plans</h4>
        <h6 style={{padding:"10px" ,fontSize:"14px"}}>Creating Pricing Plans for this Product/ Service</h6>
      </Row>
      <Row>
     <Col lg={6} sm={12}>
         <Form.Label>Plan Name</Form.Label> 
     <input
            value={plan}
            onChange={e => updateFormData(e)}
            placeholder="E.g. Monthly Lifetime, etc"
            type="text"
            name=""
            required
          />
     </Col>
      <Col lg={6} sm={12}>
      <div className="tabDropdown" >
      <Form.Label >Billing Type</Form.Label> 
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Recurring">
      <Row>
                <Col>
                <div style={{ float:"left"}}>
              <Form.Label>Bill Every</Form.Label> 
                <input style={{   borderRadius:"7px"}}
                    value={firstName}
                    placeholder="1"
                    onChange={e => updateFormData(e)}
                   
                    type="text"
                    name=""
                    required
                  />
              </div>
                </Col>
                <Col>
                <div style={{width:"100%",  marginTop:"43px",}} >
                <Dropdown style={{width:"100%"}}>
                  <Dropdown.Toggle style={{width:"100%", borderRadius:"none", backgroundColor:"#fff", color:"#000"}}  >
                    Months
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{width:"90%"}}>
                    <Dropdown.Item href="#">
                    Text 1
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                    Text 2
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                    Text 3
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
                </Col>
              </Row>
      </Tab>
      <Tab eventKey="profile" title="One Time">
       
      </Tab>
    
    </Tabs>
        </div>
      </Col>
      </Row>

      <Row >
        <Col lg={6} sm={12} className="inputwrapper" data-required="USD">
        <Form.Label>Price</Form.Label> 
        <input
            value={price}
            onChange={e => updateFormData(e)}
            type="number"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            placeholder="0.00"
            name="price"
            required
          />
          </Col>
      </Row>
      
   

    <Row>
      <Col lg={6} sm={12}>
      <Form.Label>No Billing Cycles (optional)</Form.Label> 
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="firstName"
              placeholder="E.g. 6, 12 etc. "
              value={x.billing}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 &&
               <button 
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button  onClick={handleAddClick}>+ Add Another Plan</button>}
            </div>
            <p style={{fontSize:"12px", paddingTop:"7px"}}>Leave this Empty to auto Renew</p>
          </div>
        );
      })}
      </Col>
    </Row>

    <Row>
        <div>
         
          <div className="d-flex justify-content-end">
          <button style={{fontWeight:600}} >
            Cancel
          </button>
          <button style={{marginLeft:"10px"}}  >
            Create
          </button>
            </div>
   
        </div>
    </Row>

  
    
    </form>
   
    </div>
    </Container>
    </div>
  );
}

export default App;
