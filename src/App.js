import { Route, Routes  } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  //exact = exact{true} add props and set it to true
  //only show this when the full url end with '/'
  return (
    <Layout>
      <Routes >
        <Route path="/" exact element={<AllMeetupsPage />}/>
        <Route path="/new-meetup" element={<NewMeetupPage />}/>
      </Routes >
    </Layout>
  );
}

export default App;
