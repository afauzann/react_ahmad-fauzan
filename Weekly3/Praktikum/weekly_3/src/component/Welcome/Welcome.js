import { Button } from "react-bootstrap";

function Welcome() {
  return (
    <div className="image-home">
      <h1>WELCOME TO OUR WEBSITE</h1>
      <h4>Connect With Many People & Make a Friend</h4>
      <Button variant="danger" className="button-join">
        Join Now
      </Button>
    </div>
  );
}

export default Welcome;
