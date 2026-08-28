import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Heritage from './pages/Heritage/Heritage';
import About from './pages/About/About';

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/heritage"
        element={<Heritage />}
      />

      <Route
        path="/about"
        element={<About />}
      />

    </Routes>

  );
}

export default App;