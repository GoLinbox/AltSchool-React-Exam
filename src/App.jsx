import { Route, Routes } from "react-router-dom";
import Home from "./Components/My-Pages/Home";
import About from "./Components/My-Pages/About";
import Test from "./Components/My-Pages/errorTest";
import Pagination from "./Components/My-Pages/Pagination";
import Services from "./Components/My-Pages/Services";
import Contact from "./Components/My-Pages/Contact";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <section className="main-container">
      <section>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
            <Route path="/error-test" element={<Test />}></Route>

          <Route path="/users" element={<Pagination />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </section>
    </section>
  );
}

export default App;
