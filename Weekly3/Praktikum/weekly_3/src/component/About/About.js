import { Container } from "react-bootstrap";
import img from "../../assets/About.jpg";

function About() {
  return (
    <Container style={{ padding: "50px 95px" }}>
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <div style={{ textAlign: "center" }}>
        <img src={img} style={{ width: "fit-content", height: "75vh" }} />
      </div>
      <div style={{ fontSize: "large" }}>
        <p>
          We're a fully distributed team of 85 people living and working in 15
          countries around the world. And we're working to build the best
          product to help our customers build their brands and grow their
          business on social Media
        </p>
        <p>
          We've always aimed to fo things a little differently at CMC. Since the
          early days, we've had a focus on building one of the most unique and
          fulfilling workplaces by rethinking a lot of traditional practices
        </p>
      </div>
    </Container>
  );
}
export default About;
