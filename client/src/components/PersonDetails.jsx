import React from 'react'

const PersonDetails = ({ form, setForm }) => {
    return (
        <form className='grid grid-cols-2 gap-5'>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="name">Name</label>
                <input className='input-in' type="text" id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="email">Email</label>
                <input className='input-in' type="email" id="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="phone">Phone</label>
                <input className='input-in' type="tel" id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="github">Github</label>
                <input className='input-in' type="url" id="github" placeholder='https://github.com/' value={form.github} onChange={(e) => setForm({ ...form, github: e.target.value })}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="linkedin">LinkedIn</label>
                <input className='input-in' type="url" id="linkedin" placeholder='https://linkedin.com/' value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="skills">Skills</label>
                <input className='input-in' type="text" id="skills" placeholder='HTML, CSS, JavaScript' value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} />
            </div>
        </form>
    )
}

export default PersonDetails