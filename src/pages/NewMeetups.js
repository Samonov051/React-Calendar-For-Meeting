import NewMeetupForum from "../components/meetups/NewMeetupForm";
import { useNavigate  } from "react-router-dom";

function NewMeetupsPage() {
  const navigate = useNavigate ();
  //send request to the server
  function addMeetupHandler(meetupData) {
    //fetch is a vanilla js to send 'get' and 'post'request
    fetch(
      "https://traumasofchina-default-rtdb.firebaseio.com/meetups.json",
      //2nd argument to configure the http request
      //headers are meta-data the API requires
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForum onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupsPage;
