import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const renderAbout = routerProps => {
  return <About myName="Michael" />;
};

const App = () => (
  <Router>
    <div>
      <Header />

      <Switch>
        <Route
          exact
          path="/"
          children={routerProps => {
            console.log("======", routerProps);
            return <h2>I am home!!!</h2>;
          }}
        />
        <Route path="/about" render={renderAbout} />
        <Route path="/topics/:id" component={Topic} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </div>
  </Router>
);

const Home = () => <h2>Home</h2>;
class About extends React.Component {
  render() {
    return (
      <h2>
        ABOUT {this.props.myName}
        !!!
      </h2>
    );
  }
}
// const About = () => <h2>About</h2>;
const Topic = ({ match }) => {
  return <h3>Requested Param: {match.params.id}</h3>;
};

class Topics extends React.Component {
  render() {
    return (
      <div>
        <h2>Topics</h2>

        <ul>
          <li>
            <Link to="topics/components">Components</Link>
          </li>
          <li>
            <Link to="topics/props-v-state">Props v. State</Link>
          </li>
        </ul>
      </div>
    );
  }
}

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>

//     <ul>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     {/* <Route path={`${match.path}/:id`} component={Topic} />
//     <Route
//       exact
//       path={match.path}
//       render={() => <h3>Please select a topic.</h3>}
//     /> */}
//   </div>
// );
const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>
);

export default App;
