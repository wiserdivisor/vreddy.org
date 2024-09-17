import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./component/layout.js";
import Home from "./component/home.js";

import BlogCatalog from "./component/blog_catalog.js";
import PlayCatalog from "./component/play_catalog.js";

import BlogPost from "./component/blog_post.js";

import Contact from "./component/contact.js";

import Gargantua from "./component/gargantua.js";
import FlappyOrnithopter from "./component/flappy_ornithopter.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<BlogCatalog />} />
          <Route path="/blog/:name" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/play" element={<PlayCatalog />} />
          <Route path="/play/gargantua" element={<Gargantua />} />
          <Route path="/play/flappy_ornithopter" element={<FlappyOrnithopter />} />
          {/*
          <Route path="*" element={<NoPage />} />
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
