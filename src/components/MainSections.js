import React, {  useState } from "react";
import "./main-sections.css";
import Section from "./Section";
function MainSections(props) {
    const classNames = require("classnames");
    const data = props.data;

    const [showSection, setShowSection] = useState(false);
    const [currentData, setCurrentData] = useState();
    
    function back() {
        setShowSection(false);
    }
    function handleClick(data) {
        if (!data.empty) {
            setCurrentData(data);
            setShowSection(true);
        }
    }

    const mainSections = data.map((section) => {
        var classes = classNames({
            section: true,
            "empty-section": section.empty,
        });
        return (
            <div className={classes} onClick={() => handleClick(section)}>
                {section.sectionName}
            </div>
        );
    });
    return (
        <div className="">
            {!showSection ? (
                <div className="main-sections">
                    <div className="back" onClick={props.back}>
                        &lt;
                    </div>
                    {mainSections}
                </div>
            ) : (
                <Section data={currentData} back={back} />
            )}
        </div>
    );
}
export default MainSections;
