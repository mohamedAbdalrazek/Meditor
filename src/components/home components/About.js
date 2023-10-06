import React from "react";
import "./about.css";
import about from "../../images/about.png";
function About(props) {
    return (
        <div className="about">
            <h3>من نحن</h3>
            <div className="about-container">
                <div className="left">
                    <img src={about} />
                </div>
                <div className="right">
                    <h3>بوابتك لتطوير مهاراتك الهندسية</h3>
                    <p>
                        في أكاديمية ميديتور، مهمتنا هي دعم الشباب العرب في تركيا
                        على طريق تحقيق تطلعاتهم في مجال الهندسة. أكاديميتنا عبر
                        الإنترنت ليست مجرد منصة، بل هي مجتمع نبنيه معًا لتعزيز
                        المعرفة وتحقيق النجاح.
                    </p>
                    <h3>لماذا ميديتور؟</h3>
                    <p>
                        دورات هندسية متنوعة: نقدم مجموعة متنوعة من دورات الهندسة
                        التي تناسب احتياجاتك. 
                    </p>
                    <p>
                    تعلم حي: نحن لا نقدم مجرد محاضرات مسجلة، بل دوراتنا مباشرة وحية. انضم إلى فصولنا الحية لفرصة للتفاعل المباشر مع المدرسين والزملاء.
                    </p>
                    <p>
                        {" "}
                        مرونة في التعلم: نفهم أنكم مشغولون، لذا دوراتنا مرنة
                        لتتناسب مع جداولك
                    </p>
                </div>
            </div>
        </div>
    );
}
export default About;
