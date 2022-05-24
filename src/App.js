import Navbar from "./components/Navbar";
import "./App.css";
import { HashRouter as Router,Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Service} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
