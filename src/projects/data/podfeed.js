import React from "react";
import { CardText } from "reactstrap";
import { CodeBlock } from "../CodeBlock.js";

const podfeed = {
  id: "podfeed", title: "podfeed",
  skills: [
    { icon: "fab fa-python", label: "Python 3", color: "goldenrod" },
  ],

  links: [
    { icon: "fab fa-github", label: "Github Repository", color: "black",
      link: "https://github.com/mmazzocchi/podfeed" },
  ],

  body: (
    <React.Fragment>
      <CardText>
        <span className="mono">podfeed</span> is a Python 3 podcast
        aggregation library. In essence, it&#39;s designed to be a 
        scriptable, automatable library for reading a set of RSS feeds,
        gathering the links for any new episodes, and optionally downloading
        the audio file itself.
      </CardText>
      <CardText>
        <span className="mono">podfeed</span> will definitely become a pypi
        package. Any day now.
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
};

export default podfeed;
