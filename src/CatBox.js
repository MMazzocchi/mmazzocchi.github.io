import React from "react";
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import PropTypes from "prop-types";

const CatBox = ({ title, children }) => (
  <React.Fragment>
    <Row className="justify-content-center catbox">
      <Col md="8">
        <Card className="shadow">
          <CardHeader tag="h3" className="text-center">
            <span className="mono">{ title }</span>
          </CardHeader>

          { children }
        </Card>
      </Col>
    </Row>
  </React.Fragment>
);

CatBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
};

export { CatBox };
