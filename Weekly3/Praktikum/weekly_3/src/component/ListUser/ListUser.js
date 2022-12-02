import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/usersSlice";

function ListUser() {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Customers</h1>
      <Row>
        {user.data.team?.map((item) => (
          <Col style={{ textAlign: "center" }} md="auto" lg={4}>
            <h3>{item.nama}</h3>
            <Image src={item.avatar} roundedCircle alt="avatar" width={200} />
            <p>Since: {item.createAt}</p>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ListUser;
