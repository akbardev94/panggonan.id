import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
// import ExampleNum from 'pages/ExampleNum';
// import ExampleDate from 'pages/ExampleDate';
// import ExampleBread from "pages/ExampleBread";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path="/" component={ExampleNum}></Route> */}
        {/* <Route path="/" component={ExampleDate}></Route> */}
        {/* <Route path="/" component={ExampleBread}></Route> */}
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
      </Router>
    </div>
  );
}

export default App;
