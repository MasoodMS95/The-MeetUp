import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navigation from "./components/Navigation";
import * as sessionActions from './store/session'
import LandingPage from './components/LandingPage'
import GroupEventFunnel from "./components/GroupsEvents/GroupEventFunnel";
import GroupDetail from "./components/GroupsEvents/Groups/GroupDetail";
import EventDetail from "./components/GroupsEvents/Events/EventDetail";
import GroupForm from "./components/GroupsEvents/Groups/GroupForm";
import EventForm from "./components/GroupsEvents/Events/EventForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.getUser()).then(() => setIsLoaded(true));
  }, [dispatch])
  return (
    <React.Fragment>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
      <React.Fragment>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
          <Route exact path='/groups/new'>
            <GroupForm action={'create'}/>
          </Route>
          <Route path='/groups/:id/edit'>
            <GroupForm action={'update'}/>
          </Route>
          <Route path='/groups/:id/events/new'>
            <EventForm />
          </Route>
          <Route path='/groups/:groupId'>
            <GroupDetail />
          </Route>
          <Route exact path='/groups'>
            <GroupEventFunnel/>
          </Route>
          <Route path='/events/:eventId'>
            <EventDetail />
          </Route>
          <Route path='/events'>
            <GroupEventFunnel/>
          </Route>
          <Route path='/loading'>
            <p style={{fontSize:"32px", textAlign:"center"}}>Loading... Please wait...</p>
          </Route>
          <Route path='*'>
            <p style={{color: 'red', textAlign:'center',fontSize:'64px'}}>404 page not found.</p>
          </Route>
        </Switch>
      </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
