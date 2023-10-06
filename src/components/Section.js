import React, { useEffect, useState } from "react";
import Field from "./Field";
import "./section.css";
function Section(props) {
    const data = props.data;
    const [currentField, setCurrentField] = useState();
    const [showField, setShowField] = useState(false);
    function back(){
        setShowField(false)
    }
    function handleClick(field) {
        if (!field.sectionEmpty) {
            setCurrentField(field);
            setShowField(true);
        }
    }
    const fields = data.fields.map((field) => {
        return (
            <div className="fields-part" onClick={() => handleClick(field)}>
                {field.name}
            </div>
        );
    });
    return (
        <div className="temp-section">
            {!showField ? (
                <div className="section-detail">
                    <div className="back" onClick={props.back}>
                        &lt;
                    </div>
                    <h1>{data.sectionName}</h1>
                    <div className="fields">{fields}</div>
                </div>
            ) : (
                <Field data={currentField} back ={back}/>
            )}
        </div>
    );
}
export default Section;
