import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import Forms from "../Form/Form";

function Contact() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col style={{ paddingLeft: "100px" }}>
            <h1>Contact Us</h1>
            <p style={{ marginTop: "50px" }}>
              Need to get in touch with us? Either fill out the form
              <br />
              with your inquiry or find the departement email you'd
              <br />
              like to contact below.
            </p>
          </Col>
          <Col style={{ paddingRight: "100px" }}>
            <Forms />
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col>
            <Row>
              <h2>Our Social Media</h2>
              <Stack direction="horizontal" gap={3}>
                <h2>
                  <BsFacebook />
                </h2>
                <h2>
                  <BsTwitter />
                </h2>
                <h2>
                  <BsInstagram />
                </h2>
                <h2>
                  <BsGithub />
                </h2>
              </Stack>
            </Row>
          </Col>
          <Col>
            <Row>
              <h2>
                Chicago Community
                <br />
                Member
              </h2>
            </Row>
            <Row>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                voluptates iste, sapiente similique molestias totam ipsam
                praesentium rerum necessitatibus repellat?
              </p>
            </Row>
          </Col>
          <Col>
            <Row>
              <h2>Come Say Hello</h2>
            </Row>
            <Row>
              <Stack>
                <div>4043 N</div>
                <div>Ravenswood Ave</div>
                <div>Suite 316</div>
                <div>Suite 316</div>
                <div>(773) 348-9876</div>
              </Stack>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Contact;
