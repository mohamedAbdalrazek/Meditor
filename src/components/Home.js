import React from "react";
import Landing from "./home components/Landing";
import Uni from "./home components/Uni";
import About from "./home components/About";
import Teacher from "./home components/Teacher";
import Contact from "./home components/Contact";
import Course from "./Course";
import Field from "./Field";
function Home(props) {
    const [hideHome, setHideHome] = React.useState(false);
    const [courseData, setCourseData] = React.useState()
    function handleHome(data){
        setHideHome(true)
        setCourseData(data)
    }
    React.useEffect(()=>{
        setHideHome(false)
    },[props.hide])
    return (
        <div className="home">
            {!hideHome ? (
                <div>
                    <Landing setCurrent={props.setCurrent} />
                    <Uni />
                    <About />
                    <Field data={props.data[0].fields[2]} check={true} handleHome = {handleHome} />
                    <Teacher />
                    <Contact />
                </div>
            ) : (
                <Course data={courseData} check={true} setHideHome={setHideHome} />
            )}
        </div>
    );
}
export default Home;
