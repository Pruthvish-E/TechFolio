import React from "react";

import { Row, Col } from "react-flexbox-grid";
// s

function Footer() {
  return (
    <footer>
      <div className="content">
        <Row center="xs" middle="xs">
          <Col xs={4}>
            {/* <img src={ayinQophLogo} className="content_logo" alt="pruthvish"/>
            <img
              src={babusoftLogo}
              className="content_logo"
              alt="pruthvish"
              style={{ marginBottom: "30px" }}
            /> */}
          </Col>
          <Col xs={8} className="techfolio_copyright">Pruthvish's Portfolio ©2024 Design by –– Pruthvish Eshwar</Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
