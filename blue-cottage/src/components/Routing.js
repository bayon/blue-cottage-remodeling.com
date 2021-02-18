import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Container, Image, Menu } from "semantic-ui-react";
import About from '../screens/About';
import Users from '../screens/Users';


export default function Routing() {
  return (
    <Router>
      <>
        <Menu>
          <Container>
            <Menu.Item>
              <i className="phone icon"></i>
            </Menu.Item>
            <Menu.Item header>Blue Cottage Remodeling</Menu.Item>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item position="right">
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/chris.jpg"
                avatar
              />
            </Menu.Item>
            <Menu.Item>Bayon</Menu.Item>
          </Container>
        </Menu>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>Blue Cottage Remodeling</h2>
    </>
  );
}
/*
function About() {
  return (
    <>
      <h2>About</h2>
    </>
  );
}

function Users() {
  return (
    <>
      <h2>Users</h2>
    </>
  );
}
*/