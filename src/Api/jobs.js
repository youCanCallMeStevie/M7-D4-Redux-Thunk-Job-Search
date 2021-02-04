
export const getJobResults = async (position, location) => {
    try {
      const response = await fetch(
        `https://my--cors--anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${location}`
      );
      const data  = await response.json();
      if (response.ok) {
        console.log(data);
        return data;
      } else {
        console.log("there was a problem fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };


  export const getOneJob = async (id) => {
    try {
      const response = await fetch(
        `https://cors--anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
      );
      const data  = await response.json();
      if (response.ok) {
        console.log(data);
        return data;
      } else {
        console.log("there was a problem fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };