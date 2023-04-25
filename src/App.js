import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./router/Home"
import "./styles.css";
import ScrollTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
