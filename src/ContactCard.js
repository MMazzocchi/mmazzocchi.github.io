import React from "react";
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardSubtitle from 'reactstrap/lib/CardSubtitle';
import CardTitle from 'reactstrap/lib/CardTitle';
import PropTypes from "prop-types";

const ContactCard = ({ icon, label, link, color }) => (
  <Card className="text-center shadow contact-card"
        tag="a" href={ link } target="_blank">
    <CardBody>
      <CardTitle>
        <i className={ `${ icon } contact-icon` }
           style={{ "backgroundColor": color }}></i>
      </CardTitle>
      <CardSubtitle style={{ "color": color }}>
        { label }
        &nbsp;
        <i className="fas fa-external-link-alt"></i>
      </CardSubtitle>
    </CardBody>
  </Card>
);

ContactCard.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string
};

export { ContactCard };
