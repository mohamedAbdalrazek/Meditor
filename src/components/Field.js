import React, { useState } from "react";
import "./field.css";
// import classNames from 'classnames';
import Course from "./Course.js";
function Field(props) {
    const classNames = require("classnames");
    const data = props.data;
    const [showCourse, setShowCourse] = useState(false);
    const [currentCourse, setCurrentCourse] = useState();
    function back() {
        setShowCourse(false);
    }
    function handleClick(data) {
        if (!data.courseEmpty) {
            setCurrentCourse(data);
            setShowCourse(true);
        }
    }

    const courses = data.courses.map((course) => {
        var classes = classNames({
            course: true,
            "empty-course": course.courseEmpty,
        });

        return (
            <div
                onClick={() => {
                    if (!props.check) {
                        return handleClick(course);
                    } else {
                        return props.handleHome(course);
                    }
                }}
                className={classes}
            >
                {course.courseName}
            </div>
        );
    });
    return (
        <div>
            {!showCourse ? (
                <div className="field">
                    {!props.check ? (
                        <div className="back" onClick={props.back}>
                            &lt;
                        </div>
                    ) : undefined}
                    {!props.check ? (
                        <h1>{data.name}</h1>
                    ) : (
                        <h1 className="cond-header">بعض المواد التي ندرسها</h1>
                    )}
                    <div className="courses">{courses}</div>
                </div>
            ) : (
                <Course data={currentCourse} back={back} />
            )}
        </div>
    );
}
export default Field;
