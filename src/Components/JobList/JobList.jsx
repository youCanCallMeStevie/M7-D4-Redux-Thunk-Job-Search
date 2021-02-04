import React from "react";
import Job from "../Job/Job";
import { Container, Table } from "react-bootstrap";
import uniqid from "uniqid";
import "../JobList/JobList.css";

function JobList(props) {
  const { jobList } = props;
  return (
    <div>
    <Container style={{justifyContent:"center", alignContent:"center"}}>
      <Table striped bordered hover>
        <tbody>
          {jobList?.map(job => (
              <Job job={job} key={uniqid} />
          ))}
        </tbody>
      </Table>
	  </Container>
    </div>
  );
}

export default JobList;
