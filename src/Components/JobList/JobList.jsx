import React from "react";
import Job from "../Job/Job";
import { Container, Table } from "react-bootstrap";
import uniqid from "uniqid";
import "../JobList/JobList.css";

function JobList(props) {
  const { jobList } = props;
  let { position, location } = props.values;
console.log("position", position)
console.log("location", location)
  return (
    <Container>
      <div className="mt-5 border-top border-secondary">
        <h2 className="my-3">
          {jobList.length > 0
            ? `Showing ${jobList.length}  ${
                jobList.length === 1 ? "Job" : "Jobs"
              } Results`
            : "You have no results"}
        </h2>
        <hr />
        <Table striped bordered hover>
          <tbody>
            {jobList?.map(job => (
              <Job job={job} key={uniqid} />
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default JobList;
