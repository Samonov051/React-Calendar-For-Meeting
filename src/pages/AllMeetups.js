import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect, Fragment } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //takes two arguments, the 2nd is an array of dependencies
  //only add the external values the effect function relies on except for state updating functions
  //in this case useEffect() will only run once when the componene is rendered for the first time
  useEffect(() => {
    setIsLoading(true);
    fetch("https://traumasofchina-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //transform the data from object in firebase database to an array
        //so it can be read in MeetupList.js
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <Fragment>
        <p>Loading...</p>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </Fragment>
  );
}
export default AllMeetupsPage;
