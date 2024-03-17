import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./commpart.css";

export default function CommPart() {
  return (
    <section id="SPONSERS" className="commSec p-5">
      <div>
        <h1>Sponsors</h1>
      </div>
      <div
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "25px",
        }}
      >
        <div>
          <div className="sponser sponser1">
            <a
              href="https://kalkitech.com/"
              target="_blank"
              className="card card1"
            ></a>
          </div>
        </div>
        <div className="sponser-line">
          <div className="sponser sponser2">
            <a href="" target="_blank" className="card1"></a>
          </div>
          <div className="sponser sponser3">
            <a
              href="http://www.macealumniqatar.org/"
              target="_blank"
              className="card1"
            ></a>
          </div>
        </div>
      </div>
    </section>
    //     <section
    //       id="SPONSERS"
    //       className="commSec"
    //       style={{
    //         position: "relative",
    //         overflow: "hidden",
    //         display: "flex",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <img
    //         style={{
    //           position: "absolute",
    //           height: "100%",
    //           opacity: ".6",
    //           width: "100%",
    //           zIndex: "2",
    //         }}
    //         src="images/backgroundAbstarct.png"
    //       />
    //       <div style={{ zIndex: "4", position: "absolute" }}>
    //         <Container style={{ padding: "1rem" }}>
    //           <Row
    //             style={{ paddingTop: "2rem", paddingLeft: "2rem", rowGap: "2rem" }}
    //           >
    //             <Col sm={12}>
    //               <h1
    //                 style={{ textAlign: "center" }}
    //                 data-aos="zoom-out-up"
    //                 data-aos-duration="1300"
    //                 data-aos-once="true"
    //               >
    //                 Sponsers
    //               </h1>
    //             </Col>
    //             {/* <Col lg={6}  md={6}  style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
    //           <a href='https://fossunited.org/' target="_blank" className="card1">
    //           <img src='/images/fossunited.png' style={{ width:'100%' }}/>
    //   <div className="card__content">

    //   </div>
    // </a>

    //           </Col> */}
    //             {/* <Col  lg={6}  md={6}   style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
    //           <a href='https://techgentsia.com/' target="_blank" className="card1">
    //           <img src='/images/techgentsia.png' style={{ width:'90%' }}/>
    //   <div className="card__content">

    //   </div>
    // </a>
    //           </Col> */}
    //             {/* <Col  lg={6}  md={6}  style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
    //           <a href='https://techmaghi.com/' target="_blank" className="card1">
    //           <img src='/images/techmaghi.png' style={{ width:'100%' }}/>
    //   <div className="card__content">

    //   </div>
    // </a>
    //           </Col> */}
    //             <Col
    //               lg={6}
    //               md={6}
    //               style={{
    //                 display: "flex",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //               }}
    //               data-aos="zoom-out-up"
    //               data-aos-duration="1300"
    //               data-aos-once="true"
    //             >
    //               <a
    //                 href="https://kalkitech.com/"
    //                 target="_blank"
    //                 className="card1"
    //               >
    //                 <img src="/images/kalikitech.png" style={{ width: "90%" }} />
    //                 <div className="card__content"></div>
    //               </a>
    //             </Col>
    //           </Row>
    //         </Container>
    //       </div>
    //     </section>
  );
}
