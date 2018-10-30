import React from "react";
import {
  CardBody,
  CardText,
  Row,
  Col
} from "reactstrap";

const skills = [
  { icon: "fas fa-globe", label: "Web Design", color: "red",
    content: (
      <CardBody>
        <CardText>
          I've held serveral professional positions in which I utilized web
          development technologies and web design principles. Most recently,
          I've had the opportunity to work across several Django/React projects
          in my current job. In addition, I develop for the web in my spare time
          on personal projects (including this site), mainly using NodeJS. I
          strive for solutions that work elegantly in many environments,
          including desktop and mobile. I'm especially excited by recent
          advancements in WebGL and 3D libraries like THREE.js.
        </CardText>
        <Row className="justify-content-center">
          {
            ["Django", "NodeJS", "React", "PHP", "d3.js", "THREE.js", "SVG",
             "WebGL"].map((word, i) => (
               <Col key={ `wd-${i}` }
                    className="text-center">
                 <h5>{ word }</h5>
               </Col>
             ))
          }
        </Row>
      </CardBody>
    )
  },
  { icon: "fas fa-desktop", label: "Desktop", color: "blue",
    content: (
      <CardBody>
        <CardText>
          My work in desktop and standalone applications has mainly been in my
          work for various space systems companies. In these positions, my
          experience spans a wide variety of languages and capabilities,
          including modeling and simulation, ground processing applications,
          databases, scripts, and more.
        </CardText>
        <Row className="justify-content-center">
           {
            ["Java", "C/C++", "Python", "Perl", "SQL" ].map((word, i) => (
               <Col key={ `d-${i}` }
                    className="text-center">
                 <h5>{ word }</h5>
               </Col>
             ))
          }
        </Row>
      </CardBody>
    )
  },
  { icon: "fas fa-wrench", label: "Tools", color: "grey" }, 
  { icon: "fas fa-flask", label: "Research", color: "purple" }, 
  { icon: "fas fa-redo", label: "Agile", color: "black" }, 
  { icon: "fas fa-dice-d20", label: "Board Gaming", color: "green" }, 
  { icon: "fas fa-ellipsis-h", label: "More", color: "orange" }
];


export { skills };
