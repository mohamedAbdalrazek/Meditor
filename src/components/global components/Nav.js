import React, { useEffect } from "react";
import logo from "../../images/word right small.png";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Nav(props) {
    const setCurrent = props.setCurrent;
    const [hideList, setHideList] = React.useState(true);
    function toggle() {
        setHideList((prevHideList) => !prevHideList);
    }
    useEffect(()=>{
        setHideList(true)
    },[props.hideBar])
    return (
        <div className="navbar">
            <img src={logo} className="logo" onClick={() => (setCurrent(0), props.setHide((prevHide)=>!prevHide))} />
            <span className="icon" onClick={toggle}>
                <FontAwesomeIcon icon={faBars} />
            </span>
            <ul className={`${hideList ? "hidden" : undefined}`}>
                {props.current !== 1 ? (
                    <button
                        onClick={() => {
                            setCurrent(1);
                        }}
                    >
                        {" "}
                        سجل الآن
                    </button>
                ) : undefined}
                <li onClick={() => setCurrent(4)}>تواصل معنا</li>
                <li onClick={() => setCurrent(3)}>كُن مدرساٌ معنا</li>
                <li onClick={() => setCurrent(2)}>من نحن</li>
                <li onClick={() => (setCurrent(0), props.setHide((prevHide)=>!prevHide))}>
                    الصفحة الرئيسية
                </li>
            </ul>
        </div>
    );
}
export default Nav;
