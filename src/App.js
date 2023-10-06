import "./App.css";
import Home from "./components/Home";
import Nav from "./components/global components/Nav";
import Footer from "./components/global components/Footer";
import MainSections from "./components/MainSections";
import About from "./components/home components/About";
import Teacher from "./components/home components/Teacher";
import Contact from "./components/home components/Contact";
import "../node_modules/video-react/dist/video-react.css";
import mainData from "./meditorData";
import { useState, useEffect } from "react";

function App() {
    const data = mainData.mainData;
    const [current, setCurrent] = useState(0);
    function back() {
        setCurrent(0);
    }
    return (
        <div>
            <Nav setCurrent={setCurrent} current={current}/>
            {current === 0 && <Home setCurrent={setCurrent} data={data} />}
            {current === 1 && <MainSections data={data} back={back} />}
            {current === 2 && <About />}
            {current === 3 && <Teacher />}
            {current === 4 && <Contact />}
            <Footer />
        </div>
    );
}

export default App;
