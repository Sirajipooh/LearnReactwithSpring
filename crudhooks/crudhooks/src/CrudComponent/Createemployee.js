import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
function Createemployee(props) {
  const [employee, setemployee] = useState({
    name: "",
    department: "",
    age: "",
    city: "",
    country: "",
    gender: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:8080/employee";
  const Insertemployee = (e) => {
    e.preventDefault();
    //debugger;
    const data = {
      name: employee.Name,
      department: employee.Department,
      age: employee.Age,
      city: employee.City,
      country: employee.Country,
      gender: employee.Gender,
    };
    axios.post(apiUrl, data).then((result) => {
      props.history.push("/EmployeList");
    });
  };
  const onChange = (e) => {
    e.persist();
    //debugger;
    setemployee({ ...employee, [e.target.name]: e.target.value });
  };
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={Insertemployee}>
                  <h1>Register</h1>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Name"
                      value={employee.Name}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="Department"
                      name="Department"
                      id="Department"
                      value={employee.Department}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="Age"
                      name="Age"
                      id="Age"
                      value={employee.Age}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="City"
                      name="City"
                      id="City"
                      value={employee.City}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="Country"
                      name="Country"
                      id="Country"
                      value={employee.Country}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="Gender"
                      name="Gender"
                      id="Gender"
                      value={employee.Gender}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button
                          type="submit"
                          className="btn btn-info mb-1"
                          block
                        >
                          <span>Save</span>
                        </Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button className="btn btn-info mb-1" block>
                          <span>Cancel</span>
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Createemployee;

// fix warning below

/*Warning: A component is changing an uncontrolled input of type text to be controlled. 
Input elements should not switch from uncontrolled to controlled (or vice versa). 
Decide between using a controlled or uncontrolled input element for the lifetime of the component. 
More info: https://fb.me/react-controlled-components*/
