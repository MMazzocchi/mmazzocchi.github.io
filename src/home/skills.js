import React from "react";
import {
  CardBody,
  CardText,
  Row,
  Col
} from "reactstrap";
import { Exp } from "./Exp.js";

const skills = [
  { icon: "fas fa-globe", label: "Web Design", color: "red",
    content: (
      <CardBody>
        <CardText>
          I&#39;ve held several professional positions in which I utilized web
          development technologies and web design principles. Most recently,
          I&#39;ve had the opportunity to work across several Django/React projects
          in my current position. In addition, I develop for the web in my spare
          time on personal projects (including this site), mainly using NodeJS.
          I strive for solutions that work elegantly in many environments,
          including desktop and mobile. I&#39;m especially excited by recent
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

  { icon: "fas fa-wrench", label: "Tools", color: "grey",
    content: (
      <CardBody>
        <CardText>
          I&#39;m well versed in a variety of software development tools. Git is
          my standard source control management system, both in professional and
          personal projects.
        </CardText>
        <Row className="justify-content-center">
           {
            ["git", "subversion", "Atlassian Toolset", "RedMine", 
             "GitLab" ].map((word, i) => (
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

  { icon: "fas fa-flask", label: "Research", color: "purple",
    content: (
      <CardBody>
        <CardText>
          I&#39;ve held multiple research and development positions throughout 
          my career. These were mainly working on small, fast-paced projects 
          with dynamic and distributed teams. Throughout these projects, I 
          served in a variety of roles, including software development,
          database administation, operations and maintenance, and project
          leadership.
        </CardText>
      </CardBody>
    ) 
  },

  { icon: "fas fa-redo", label: "Agile", color: "black",
    content: (
      <CardBody>
        <CardText>
          The majority of projects I&#39;ve worked on throughout my professional
          career utilized an adapted version of Scrum Agile. While I&#39;ve
          operated  inside a strictly Agile team, I&#39;ve also had the 
          opportunity to see the methodology adjusted to suit the needs of 
          individual projects, and the benefits and drawbacks of doing so.
        </CardText>
      </CardBody>
    )
  }, 

  { icon: "fas fa-dice-d20", label: "Board Gaming", color: "green",
    content: (
      <CardBody>
        <CardText>
          It&#39;s tough for me to find a board game I don&#39;t enjoy. My 
          favorites are undoubtedly strategy, logic, and planning games, shortly
          followed bt anything with an innovative structure (asymmetric,
          cooperative, etc). Most importantly, though, I enjoy having a good 
          group of people to game with.
        </CardText>

        <Row className="justify-content-center">
           {
            [ 'Betrayal', 'Avalon', 'Coup', 'Forbidden Island',
              'Star Realms', 'Pandemic'].map((word, i) => (
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
 
  { icon: "fas fa-ellipsis-h", label: "More", color: "orange",
    content: (
      <CardBody>
        <CardText>
          I&#39;ve got a <strong>lot</strong> of interests. Here are just a few:
        </CardText>
        <Row className="justify-content-center">
          <Col xs="6">
            <ul>
              <li>Computer Vision</li>
              <li>Graphics</li>
              <li>Game Dev.</li>
              <li>Podcasts</li>
              <li>Swing Dancing</li>
              <li>Baking</li>
            </ul>
          </Col>
          <Col xs="6">
            <ul>
              <li>Artificial Intelligence</li>
              <li>Reading</li>
              <li>Hiking</li>
              <li>Kayaking</li>
              <li>History</li>
              <li>And more!</li>
            </ul>
          </Col>
        </Row>
        <CardText>
          <Exp date="7/7/2014" />
        </CardText>
      </CardBody>
    )
  }
];


export { skills };