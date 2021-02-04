import React from "react";
import Job from "../Job/Job";
import { Container, Table } from "react-bootstrap";
import uniqid from "uniqid";
import "../JobList/JobList.css";

function JobList(props) {
  const { jobList } = props;
  return (
    <Container>
      <div className="mt-5 border-top border-secondary">
        <h2 className="my-3">
          {jobList.length > 0
            ? `Showing ${jobList.length} results ${
                jobList.length === 1 ? "job" : "jobs"
              }`
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
