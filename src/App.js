import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./assets/style/index.css"
import LandingPage from 'pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
