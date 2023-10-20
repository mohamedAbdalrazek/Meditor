import React, { useState } from "react";
import "./course.css";
import StudentForm from "./StudentForm";
function Course(props) {
    const data = props.data;
    const [showForm, setShowForm] = useState(false);
    // const [currentTeacher, setCurrentTeacher] = useState();
    function back(){
        setShowForm(false)
    }
    function handleClick() {
        setShowForm(true);
        // setCurrentTeacher(teacher);
    }
    // const teachers = data.teachers.map((teacher) => {
    //     let image = require(`../images/${teacher.img}`);
    //     let video = require(`../videos/${teacher.introVid}`);

    //     return (
    //         <div className="teacher">
    //             <div className="teacher-profile">
    //                 <img src={image} />
    //                 <p>{teacher.teacherName}</p>
    //             </div>
    //             <p> مقتطف من الكورس</p>
    //             <video src={video} controls className="intro-video" />
    //             <button onClick={()=>handleClick(teacher.teacherName)}>{teacher.teacherName} سجل مع الأستاذ </button>
    //         </div>
    //     );
    // });
    return (
        <div className="parent">
            {!showForm ? (
                <div className="course-page">
                    <div className="back" onClick={!props.check?props.back:()=>props.setHideHome(false)}>
                        &lt;
                    </div>
                    <h1>{data.courseName}</h1>
                    <div>
                        <h3>اللغة </h3>
                        <p>المنهج باللغة الأنجليزية والشرح باللغة العربية</p>
                    </div>
                    <div>
                        <h3>الجامعات التي توجد بها تلك المادة</h3>
                        <p>{(data.uni).toLowerCase()}</p>
                    </div>
                    {/* <div>
                        <h3>مدة الكورس:</h3>
                        <p>{data.coursePeriod} أسابيع</p>
                    </div> */}
                    <div>
                        <h3>فترة الكورس</h3>
                        <p>الترم الأول 2023/2024</p>
                    </div>
                    <div>
                        <h3>نظام المراجعات</h3>
                        <p>مراجعة قبل كل امتحان</p>
                    </div>
                    <div>
                        <h3>نظام الكورس</h3>
                        <p>100% أونلاين</p>
                    </div>
                    <div>
                        <h3>سعر الكورس</h3>
                        {data.discount?
                        <p>
                        <span className="prize-canceled"> {data.coursePrize} </span>  {data.coursePrize * parseFloat(data.discount)} tl 
                        </p>
                        :
                        <p>{data.coursePrize} tl</p>
                        }
                    </div>
                    <div>
                        <h3>سياسة الإسترجاع</h3>
                        <p>متاح إسترجاع المال بعد اول محاضرة فقط</p>
                    </div>
                    <button onClick={handleClick}>سجل الآن</button>
                    
                    {/* <div>
                        <h3 className="teachers-header">الأساتذة</h3>
                        <div className="teachers">{teachers}</div>
                    </div> */}
                </div>
            ) : (
                <StudentForm data={data} back = {back}/>
            )}
        </div>
    );
}
export default Course;
