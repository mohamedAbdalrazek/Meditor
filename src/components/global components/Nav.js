import React from "react";
import logo from "../../images/word right small.png"
import "./nav.css"
function Nav(props){
    const setCurrent = props.setCurrent 
    return(
            <div className="navbar">
                <img src={logo} className="logo" onClick={()=>setCurrent(0)}/>
                <ul>
                    {props.current!==1?<button onClick={()=>{setCurrent(1)}}> سجل الآن</button>:undefined}
                    <li onClick={()=>setCurrent(4)}>
                        تواصل معنا
                    </li>
                    <li onClick={()=>setCurrent(3)}>
                        كُن مدرساٌ معنا
                    </li>
                    <li onClick={()=>setCurrent(4)}>
                        من نحن
                    </li>
                    <li onClick={()=>setCurrent(0)}>
                        الصفحة الرئيسية
                    </li>
                </ul>
                
            </div>
    )
}
export default Nav