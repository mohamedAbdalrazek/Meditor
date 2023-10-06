import React, { useEffect, useState } from "react";
import "./teacher.css";
import photo from "../../images/teacher.png";
function Teacher(props) {
    return (
        <div className="teacher">
            <h3>كُن مدرساٌ معنا </h3>

            <div className="teacher-container">
                <div className="left">
                    <h3>أصبح مدرسًا في ميديتور</h3>
                    <p>
                        هل أنت متحمس لمشاركة معرفتك وتجربتك مع الطلاب؟ إذا كنت
                        مهتمًا بأن تصبح جزءًا من فريق التدريس في ميديتور، فنحن
                        نرحب بك!
                    </p>
                    <a
                        onClick={props.handleClick}
                        href="https://docs.google.com/forms/d/e/1FAIpQLSe8CLYDXI14eE7xxw73Ljwi902wb7VgsF8VgIO-EZmjrLk8ZA/viewform?usp=sf_link"
                    >
                        ابدأ رحلة التدريس الآن
                    </a>
                </div>
                <div className="right">
                    <img src={photo} />
                </div>
            </div>
        </div>
    );
}
export default Teacher;
