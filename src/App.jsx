import PropTypes from 'prop-types';
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
import { useState } from "react";

const App = () => {

  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  )
}
export default App

App.propTypes = {
  sidebar: PropTypes.bool
};
