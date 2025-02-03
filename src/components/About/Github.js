import React from "react";
// import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
      Always open to learning something new,  <strong className="purple">Because growth begins where curiosity never ends.</strong>
      </h2>
      {/* <GitHubCalendar
        username="Chourti"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      /> */}
    </Row>
  );
}

export default Github;
