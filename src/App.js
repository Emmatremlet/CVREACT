import "./index.css";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import Contact from "./pages/Contact.jsx"
import Blog from "./pages/Blog.jsx"
import MentionsLégales from "./pages/MentionsLégales"
import Realisation from "./pages/Realisation"
// import Header from "./component/Header.jsx"


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/mentionslegales" element={<MentionsLégales />}></Route>
        <Route path="/realisation" element={<Realisation />}></Route>
      </Routes>
    </div>
  );
}
