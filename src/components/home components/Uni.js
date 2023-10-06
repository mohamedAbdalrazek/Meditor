import React from "react";
import "./uni.css"
function Uni(props) {
    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(
        require.context("../../images/logos/", false, /\.(png|jpe?g|svg)$/)
    );
    const imgs = images.map((img)=>{
        return(
            <div className="uni-logo">
                <img  src={img} alt="a7a" />
            </div>
        )
    })
    return (
    <div className="uni">
        <h3>ندرس مواد أكثر من 40 جامعة تركية</h3>
        <div className="imgs-container">
            {imgs}
        </div>
    
    </div>);
}
export default Uni;
