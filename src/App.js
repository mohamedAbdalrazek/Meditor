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
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const utmSource = urlParams.get("utm_source");
        localStorage.setItem("agencyName", utmSource);
        // ... capture other UTM parameters
    }, []);
    
    const [current, setCurrent] = useState(0);
    const [hide, setHide] = useState(false);
    const [hideBar, setHideBar] = useState(false);
    window.onclick = function (e) {
        e.stopPropagation();
        if (
            e.target.tagName !== "UL" &&
            e.target.tagName !== "svg" &&
            e.target.tagName !== "path" &&
            e.target.classList[0] !== "icon"
        ) {
            setHideBar((prevHideBar) => !prevHideBar);
        }
    };
    function back() {
        setCurrent(0);
    }
    return (
        <div>
            <Nav
                setCurrent={setCurrent}
                current={current}
                setHide={setHide}
                hideBar={hideBar}
            />
            {current === 0 && (
                <Home setCurrent={setCurrent} data={data} hide={hide} />
            )}
            {current === 1 && <MainSections data={data} back={back} />}

            {current >= 2 ? (
                <div className="back" onClick={back}>
                    &lt;
                </div>
            ) : undefined}
            {current === 2 && <About />}
            {current === 3 && <Teacher />}
            {current === 4 && <Contact />}
            <Footer />
        </div>
    );
}

export default App;
