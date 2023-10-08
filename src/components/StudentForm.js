import React, { useState, useRef } from "react";
import "./student-form.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StudentForm(props) {
    const data = props.data;
    // const teacher = props.teacher;
    const agencyName = localStorage.getItem("agencyName");
    const [showConfirmation, setShowConfirmatin] = useState(0);
    const form = useRef();
    const notify = () =>
        toast.success("تم إرسال طلبك بنجاح , سيتم التواصل معك في أقرب فرصة", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    const errorMessage = () =>
        toast.error("برجاء التأكد من صحة بياناتك", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    const [formData, setFormData] = React.useState({
        name: "",
        phone: "",
        email: "",
        region: "",
        uni: "",
        fac: "",
        code: "",
    });
    function resetForm() {
        setFormData({
            name: "",
            phone: "",
            email: "",
            region: "",
            uni: "",
            fac: "",
            code: "",
        });
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        let check = true;
        if (
            !formData.name ||
            !formData.phone ||
            !formData.email ||
            !formData.uni ||
            !formData.fac ||
            !formData.region
        ) {
            check = false;
        }
        if (check) {
            setShowConfirmatin(1);
            emailjs
                .sendForm(
                    "service_fo43rfm",
                    "template_9pakbns",
                    form.current,
                    "7h_KWLaDnxeOSC-A-"
                )
                .then(
                    (result) => {
                        form.current.reset();
                        notify();
                        resetForm();
                        setTimeout(() => window.location.reload(false), 5000);
                    },
                    (error) => {
                        errorMessage();
                    }
                );
        } else {
            errorMessage();
            setShowConfirmatin(2);
        }
    }
    return (
        <div>
            <div className="student-form">
                <div className="back" onClick={props.back}>
                    &lt;
                </div>
                <h3>فورم التقديم</h3>
                <form className="customer" onSubmit={handleSubmit} ref={form}>
                    {/* <input type="hidden" name="teacher" value={teacher} /> */}
                    <input
                        type="hidden"
                        name="agency"
                        value={agencyName}
                    />
                    <input
                        type="hidden"
                        name="subject"
                        value={data.courseName}
                    />
                    <input
                        type="hidden"
                        name="price"
                        value={data.coursePrize}
                    />
                    <div className="customer-name">
                        <input
                            type="text"
                            placeholder="الأسم"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            // value={formData.name}
                        />
                        <label htmlFor="name">: الأسم </label>
                    </div>
                    <div className="customer-phone">
                        <input
                            type="tel"
                            placeholder="رقم الهاتف"
                            name="phone"
                            id="phone"
                            onChange={handleChange}
                            value={formData.phone}
                        />
                        <label htmlFor="phone">: رقم الهاتف </label>
                    </div>
                    <div className="customer-email">
                        <input
                            type="email"
                            placeholder="الأيميل"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        <label htmlFor="email">: الأيميل </label>
                    </div>
                    <div className="customer-email">
                        <input
                            type="region"
                            placeholder="الجنسية"
                            id="region"
                            name="region"
                            onChange={handleChange}
                            value={formData.region}
                        />
                        <label htmlFor="email">: الجنسية </label>
                    </div>
                    <div className="customer-uni">
                        <input
                            type="text"
                            placeholder="الجامعة"
                            id="uni"
                            name="uni"
                            onChange={handleChange}
                            value={formData.uni}
                        />
                        <label htmlFor="uni">: الجامعة </label>
                    </div>
                    <div className="customer-fac">
                        <input
                            type="text"
                            placeholder="الكلية"
                            id="fac"
                            name="fac"
                            onChange={handleChange}
                            value={formData.fac}
                        />
                        <label htmlFor="fac">: الكلية </label>
                    </div>
                    <div className="customer-conclusion">
                        <div>
                            <p>{data.courseName} </p>
                            <p>: مادة </p>
                        </div>
                        {/* <div>
                            <p>{teacher} </p>
                            <p>: مع الأستاذ </p>
                        </div> */}
                        <div>
                            <p>{data.coursePrize} ليرة تركية </p>
                            <p> : سعر الكورس </p>
                        </div>
                    </div>
                    {showConfirmation === 2 ? (
                        <p className="error-message">
                            برجاء ملأ الخانات الفارغة
                        </p>
                    ) : undefined}
                    <button className="customer-send"> ارسال الطلب</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}
export default StudentForm;
