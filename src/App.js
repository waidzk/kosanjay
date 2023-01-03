import { Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";
import "./assets/style/index.css";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage_";
import Checkout from "pages/Checkout";
import Example from "pages/Example";
import NotFound from "pages/404";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
})

function App() {
  return (
    <div className="App">
      <Routes history={history} basename={process.env.PUBLIC_URL}>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/properties/:id" element={<DetailsPage />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/example" element={<Example />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
