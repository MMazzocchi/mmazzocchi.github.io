import React from "react";
import {
  Card,
  CardHeader,
  Col,
  Row
} from "reactstrap";

const CatBox = ({ title, children }) => (
  <React.Fragment>
    <Row className="justify-content-center catbox">
      <Col md="8">
        <Card className="shadow">
          <CardHeader tag="h3" className="text-center" style={{ fontFamily: "monospace" }}>
            { title } 
          </CardHeader>

          { children }
        </Card>
      </Col>
    </Row>
  </React.Fragment>
);

export { CatBox };
