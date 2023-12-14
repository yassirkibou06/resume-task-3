import { useState } from 'react';
import Education from './Education';
import Experiences from './Experiences';
import Project from './Project';
import Extras from './Extras';
import PersonDetails from './PersonDetails';
import axios from 'axios';
import { saveAs } from 'file-saver';

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        skills: "",

        exp1_org: "",
        exp1_pos: "",
        exp1_desc: "",
        exp1_dur: "",
        exp2_org: "",
        exp2_pos: "",
        exp2_desc: "",
        exp2_dur: "",

        proj1_title: "",
        proj1_link: "",
        proj1_desc: "",
        proj2_title: "",
        proj2_link: "",
        proj2_desc: "",

        edu1_school: "",
        edu1_year: "",
        edu1_qualification: "",
        edu1_desc: "",
        edu2_school: "",
        edu2_year: "",
        edu2_qualification: "",
        edu2_desc: "",

        extra_1: "",
        extra_2: "",
    })
    const [page, setPage] = useState(0)
    const FormTitle = ["Person Details", "Experiences", "Education", "Projects", "Extras"];

    const PageDisplay = () => {
        if (page === 0) return <PersonDetails form={form} setForm={setForm} setPage={setPage} />
        if (page === 1) return <Experiences form={form} setForm={setForm} setPage={setPage} />
        if (page === 2) return <Education form={form} setForm={setForm} setPage={setPage} />
        if (page === 3) return <Project form={form} setForm={setForm} setPage={setPage} />
        if (page === 4) return <Extras form={form} setForm={setForm} setPage={setPage} />
    }

    return (
        <div className='grid grid-cols-form gap-8'>
            <div className='bg-blue-950 w-[200px] h-screen'></div>
            <div className="mt-10 px-5">
                <h1 className="form-title text-2xl font-semibold mb-2">{FormTitle[page]}</h1>
                <div className="progress-bar w-full h-2 mb-5">
                    <div className="progress w-[20%] h-full bg-red-500 rounded-xl" style={{ width: page === 0 ? "20%" : page === 1 ? "40%" : page === 2 ? "60%" : page === 3 ? "80%" : "100%" }}></div>
                </div>
                <div className="form-container">
                    <div className="form">
                        {PageDisplay()}
                    </div>
                    <div className='mt-10'>
                        <button className='border-red-500 border-2 font-medium rounded-3xl py-2 px-4 text-black mr-5' disabled={page === 0} onClick={() => setPage((currentPage) => currentPage - 1)}>Prev</button>
                        <button className='bg-red-500 font-medium rounded-3xl py-2 px-4 text-white' onClick={() => {
                            if (page === FormTitle.length - 1) {
                                axios.post("https://resume-task-3-server.vercel.app/create-pdf", form)
                                    .then(() => axios.get("https://resume-task-3-server.vercel.app/fetch-pdf", { responseType: "blob" }))
                                    .then((res) => {
                                        const pdfBlob = new Blob([res.data], { type: "application/pdf" })
                                        saveAs(pdfBlob, "Resume.pdf")
                                    })
                            } else {
                                setPage((currentPage) => currentPage + 1)
                            }
                        }}>{page === FormTitle.length - 1 ? "Download" : "Next"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form