import React, { useEffect, useState } from "react";
import video from "../../videos/background.mp4";
import "./landing.css"
function Landing(props){
    const setCurrent = props.setCurrent
    return(
        <div className="landing">
            <div className="background">
                <video src={video} muted loop autoPlay className="bg-video"/>
                <div className="overlay"></div>
            </div>
            <div className="landing-text">
                <h1>
                    مرحباً بكم في أكاديمية ميديتور
                </h1>
                <p>
                بوابتكم لعالم من الدورات المتنوعة التي تغطي مجموعة واسعة من مجالات المعرفة. بفريق من المدرسين الخبراء المتفانين، نحن ملتزمون بمساعدتكم في تحقيق أهدافكم التعليمية في أي مجال تختارونه
                </p>
                <button className="landing-btn" onClick={()=>setCurrent(1)}>سجل الآن</button>
            </div>
        </div>
    )
}
export default Landing