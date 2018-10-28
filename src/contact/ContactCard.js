import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle
} from "reactstrap";

const ContactCard = ({ icon, title, link, color }) => (
  <Card className="text-center shadow contact-card"
        tag="a" href={ link } target="_blank">
    <CardBody>
      <CardTitle>
        <i className={ `${ icon } skill-icon` }
           style={{ "backgroundColor": color }}></i>
      </CardTitle>
      <CardSubtitle style={{ "color": color }}>
        { title }
        &nbsp;
        <i className="fas fa-external-link-alt"></i>
      </CardSubtitle>
    </CardBody>
  </Card>
);

export { ContactCard };
