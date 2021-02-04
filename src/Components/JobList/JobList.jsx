import React from 'react';
import Job from '../Job/Job';
import {Row, Col} from "react-bootstrap";
import uniqid from "uniqid";
import "../JobList/JobList.css";


  
function JobList(props) {

	const { jobList } = props;
	return (
		<div>
			<Row>
            {jobList?.map((job) => (
					<Col key={uniqid} sm={12} md={6} lg={3}>
						<Job job={job} /> 
						{/* pass one single job, not the whole list. this is a new prop */}
					</Col>
				))}
			</Row>
		</div>
	);
}

export default JobList;