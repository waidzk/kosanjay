import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./assets/style/index.css"
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import Checkout from 'pages/Checkout';
import Example from 'pages/Example';
import ExampleInputNumber from 'pages/ExampleInputNumber';

function App() {
  return (
    <div className="App">
      <Router >
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
        <Route exact path="/example" component={Example}></Route>
        <Route exact path="/exampleinputnumber" component={ExampleInputNumber}></Route>
      </Router>
    </div>
  );
}

export default App;
