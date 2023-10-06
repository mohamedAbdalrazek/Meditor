import React, { useEffect, useState } from "react";
import Landing from "./home components/Landing";
import Uni from "./home components/Uni";
import About from "./home components/About";
import Teacher from "./home components/Teacher";
import Contact from "./home components/Contact";
import Field from "./Field";
function Home(props) {
    return (
        <div className="home">
                <div>
                    <Landing setCurrent={props.setCurrent} />
                    <Uni />
                    <About />
                    <Field data={props.data[0].fields[2]} check={true}/>
                    <Teacher />
                    <Contact />
                </div>
        </div>
    );
}
export default Home;
