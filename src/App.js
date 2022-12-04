import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/properties/:id" element={<DetailsPage />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/example" element={<Example />}></Route>
        <Route path="/exampleinputnumber" element={<ExampleInputNumber />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
