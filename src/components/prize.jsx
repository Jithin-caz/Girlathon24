import { Row, Col, Card } from "react-bootstrap";

export default function Prize() {
  return (
    <section
      className="py-4"
      style={{ position: "relative", zIndex: "20", background: "#2b2b2b" }}
    >
      <img
        style={{
          position: "absolute",
          height: "100%",
          opacity: ".4",
          width: "100%",
        }}
        src="images/backgroundAbstarct.png"
      />
      <h2
        className="text-center pt-4 pb-1"
        style={{ fontSize: "3rem" }}
        data-aos="zoom-out-up"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        <span style={{ color: "#eee" }}>PRIZE POOL </span>
      </h2>
      <h2 className="text-center pb-4">
        <b>&#8377;50,000</b>
      </h2>
      <Row className="prize px-4">
        <Col lg={6} className="p-4 d-flex flex-column align-items-end">
          <Card className="prize-card card1">
            <Card.Body className="text-white d-flex flex-column align-items-center justify-content-center">
              <img src="/images/1st.png" alt="" />
              <h3>Winner</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="p-4 d-flex flex-column align-items-start">
          <Card className="prize-card card1">
            <Card.Body className="text-white d-flex flex-column align-items-center justify-content-center">
              <img src="/images/2nd.png" alt="" />
              <h3>First Runner-up</h3>
            </Card.Body>
          </Card>
        </Col>{" "}
        <Col lg={6} className="p-4 d-flex flex-column align-items-end">
          <Card className="prize-card card1">
            <Card.Body className="text-white d-flex flex-column align-items-center justify-content-center">
              <img src="/images/icons8-hardware-64.png" alt="" />
              <h3>Best Hardware Project</h3>
            </Card.Body>
          </Card>
        </Col>{" "}
        <Col lg={6} className="p-4 d-flex flex-column align-items-start">
          <Card className="prize-card card1">
            <Card.Body className="text-white d-flex flex-column align-items-center justify-content-center">
              <img
                src="/images/icons8-innovation-96.png"
                style={{ width: "30%" }}
                alt=""
              />
              <h3>Best Innovation</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}
