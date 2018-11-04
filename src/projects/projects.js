import React from "react";
import { Row, Col, CardText } from "reactstrap";
import { CodeBlock } from "./CodeBlock.js";

const projects = [
  { id: "podfeed", title: "podfeed",
    sidebar: (
      <Row className="justify-content-center">
        <Col xs="3" md="2" className="text-center">
          <div>
            <i className="fab fa-python skill-icon"
               style={{ "color": "white", "backgroundColor": "gold" }}></i>
          </div>
          <p style={{ "color": "gold" }}>
            Python
          </p>
        </Col>
      </Row>
    ),

    body: (
      <React.Fragment>
        <CardText>
          podfeed is a Python 3 podcast aggregation library. In essence,
          it&#39;s designed to be a scriptable, automatable library for
          reading a set of RSS feeds, gathering the links for any new 
          episodes, and optionally downloading the audio file itself.
        </CardText>
        <CardText>
          podfeed will definitely become a pypi package. Any day now.
        </CardText>

        <CodeBlock language="python">
          {`
from podfeed.parser import parseFeed

# Collect episodes published after May 1st, 2018 
episodes = parseFeed("https://www.npr.org/rss/podcast.php?id=510289", 1525132800)

# Write each episode to a file
for episode in episodes:
  episode.writeFile("./{0}_{1}.{2}".format(
    episode.getTitle(), episode.getDate(), episode.getExt()))
          `}
        </CodeBlock>
      </React.Fragment>
    )
  },
];

export { projects };
