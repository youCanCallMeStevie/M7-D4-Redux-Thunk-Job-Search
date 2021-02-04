import React, { useState, useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";
import Search from "../../Components/Search/Search";
import JobList from "../../Components/JobList/JobList";
import { getJobResults } from "../../Api/jobs";
import "../Home/Home.css";
import {useDispatch, useSelector} from "react-redux";
import {setSearchResult} from "../../reducers/index"
function Home() {
  const [searchPosition, setSearchPosition] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()
  const {jobs } = useSelector(state=>state.search)
  const {favourites } = useSelector(state=>state)

  const defaultJobSearch = async () => {
    const jobs = await getJobResults();
    setIsLoading(false);
    dispatch(setSearchResult(jobs))
    console.log("favourites", favourites)

  };

  useEffect(() => {
    defaultJobSearch();
  }, []);

  const handleSearch = async (e) => {
    setIsLoading(true);
    const jobs = await getJobResults(searchPosition, searchLocation);
    setIsLoading(false);
    dispatch(setSearchResult(jobs))
  };

  const updateSearch = async (e) => {
    const currentId = e.currentTarget.id;
    if (currentId == "location") setSearchLocation(e.currentTarget.value);
    else setSearchPosition(e.currentTarget.value);
  };

  const body = () => {
    return (
      <Row>
            <Search
              handleSearch={handleSearch}
              updateSearch={updateSearch}
              values={{
                position: searchPosition,
                location: searchLocation,
              }}
            />
            <JobList jobList={jobs} values={{
                position: searchPosition,
                location: searchLocation,
              }} />
      </Row>
    );
  };

  return <div>
  {isLoading ? <Spinner animation="border" variant="primary"><span className="sr-only">Loading...</span></Spinner> : body()}</div>;
}

export default Home;
