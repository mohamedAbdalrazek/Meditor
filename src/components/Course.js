import React, { useState } from "react";
import "./course.css";
import StudentForm from "./StudentForm";
function Course(props) {
    const data = props.data;
    const [showForm, setShowForm] = useState(false);
    const [currentTeacher, setCurrentTeacher] = useState();
    function back(){
        setShowForm(false)
    }
    function handleClick( teacher) {
        setShowForm(true);
        setCurrentTeacher(teacher);
    }
    const teachers = data.teachers.map((teacher) => {
        let image = require(`../images/${teacher.img}`);
        let video = require(`../videos/${teacher.introVid}`);

        return (
            <div className="teacher">
                <div className="teacher-profile">
                    <img src={image} />
                    <p>{teacher.teacherName}</p>
                </div>
                <p> مقتطف من الكورس</p>
                <video src={video} controls className="intro-video" />
                <button onClick={()=>handleClick(teacher.teacherName)}>{teacher.teacherName} سجل مع الأستاذ </button>
            </div>
        );
    });
    return (
        <div className="parent">
            {!showForm ? (
                <div className="course-page">
                    <div className="back" onClick={props.back}>
                        &lt;
                    </div>
                    <h1>{data.courseName}</h1>
                    <div>
                        <h3>محتوى الكورس:</h3>
                        <p>{data.courseContnet}</p>
                    </div>
                    <div>
                        <h3>مدة الكورس:</h3>
                        <p>{data.coursePeriod} أسابيع</p>
                    </div>
                    <div>
                        <h3>عدد المحاضرات:</h3>
                        <p>{data.courseSession} محاضرة</p>
                    </div>
                    <div>
                        <h3>سعر الكورس:</h3>
                        <p>{data.coursePrize} ليرة تركية</p>
                    </div>
                    <div>
                        <h3 className="teachers-header">الأساتذة</h3>
                        <div className="teachers">{teachers}</div>
                    </div>
                </div>
            ) : (
                <StudentForm data={data} teacher={currentTeacher} back = {back}/>
            )}
        </div>
    );
}
export default Course;
