import { useRef, useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

function Forms() {
  const baseData = {
    firstName: "",
    lastName: "",
    email: "",
    desk: "",
  };

  const initialErrorMsgs = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const [data, setData] = useState(baseData);
  const [errorMsgs, setErrorMsgs] = useState(false);
  const regexName = /^[A-Za-z ]*$/;
  const regexEmail = /^\w+([\].-]?\w+)*@\w+([\].-]?\w+)*(\.\w{2,3})+$/;
  const desk = useRef(null);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (!errorMsgs.firstName && !errorMsgs.email && !errorMsgs.lastName) {
      alert(
        `
        Nama: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Pesan: ${data.desk}
        
        Berhasil Diterima`
      );
    } else {
      alert("Data Pendaftar Tidak Sesuai");
    }
    resetData();
    e.preventDefault();
  };

  const resetData = () => {
    setData(baseData);
    setErrorMsgs(initialErrorMsgs);
    desk.current.value = "";
  };

  //   const handleSubmit = (e) => {
  //     {
  //       alert("Data Berhasil di Submit");
  //     }
  //     e.preventDefault();
  //   };
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              required
              onChange={handleInput}
              value={data.firstName}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              required
              onChange={handleInput}
              value={data.lastName}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          required
          onChange={handleInput}
          value={data.email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>What can we help you with?</Form.Label>
        <Form.Control
          as="textarea"
          style={{ height: "100px" }}
          name="desk"
          required
          onChange={handleInput}
          value={data.desk}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;
