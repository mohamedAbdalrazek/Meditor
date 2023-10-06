import React, { useEffect, useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact(props) {
    const form = useRef();
    const [formData, setFormData] = React.useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    function resetForm() {
        setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
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
    const notify = () =>
        toast.success("تم إرسال الرسالة بنجاح", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    const errorMessage = () =>
        toast.error("برجاء التأكد من صحة البيانات", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    const sendEmail = (e) => {
        e.preventDefault();
        let check = true;
        if (
            !formData.name ||
            !formData.phone ||
            !formData.email ||
            !formData.message
        ) {
            check = false;
        }
        if (check) {
            emailjs
                .sendForm(
                    "service_fo43rfm",
                    "template_zop3gau",
                    form.current,
                    "7h_KWLaDnxeOSC-A-"
                )
                .then(
                    (result) => {
                        form.current.reset();
                        resetForm()
                        notify();
                    },
                    (error) => {
                        errorMessage();
                    }
                );
        } else {
            errorMessage();
        }
    };
    return (
        <div className="contact">
            <h3>تواصل معنا</h3>
            <div className="contact-container">
                <div className="left">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"
                            placeholder="إلأسم"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            placeholder="الإيميل"
                        />
                        <input
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            placeholder="رقم الهاتف"
                        />
                        <textarea
                            placeholder="رسالتك"
                            name="message"
                            onChange={handleChange}
                        ></textarea>
                        <button> إرسال</button>
                    </form>
                </div>
                <div className="right">
                    <h3>كيف يمكننا مساعدتك اليوم؟</h3>
                    <p>
                        نحن هنا لدعمك والاستماع إلى استفساراتك واقتراحاتك. يُرجى
                        تعبئة النموذج, وسنقوم بالرد عليك في أقرب وقت ممكن.
                    </p>

                    <h3>أو عن طريق حسابنا</h3>
                    <a href="mailto:meditoracademy@gmail.com">
                        meditoracademy@gmail.com
                    </a>
                </div>
            </div>
            <p>! نحن نتطلع إلى تلقي رسالتك قريبًا</p>
            <ToastContainer />
        </div>
    );
}
export default Contact;
