import React from 'react'

const Project = ({form, setForm}) => {
    /*proj1_title:"",
        proj1_link:"",
        proj1_desc:"",
        proj2_title:"",
        proj2_link:"",
        proj2_desc:"",
*/
  return (
    <div>
        <form className='grid grid-cols-2 gap-5'>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="proj1_title">TitleOne</label>
                <input className='input-in' type="text" id="proj1_title" value={form.proj1_title} onChange={(e) => setForm({...form, proj1_title: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="proj1_link">LinkOne</label>
                <input className='input-in' type="text" id="proj1_link" value={form.proj1_link} onChange={(e) => setForm({...form, proj1_link: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="proj1_desc">DescriptionOne</label>
                <input className='input-in' type="text" id="proj1_desc" value={form.proj1_desc} onChange={(e) => setForm({...form, proj1_desc: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="proj2_title">TitleTwo</label>
                <input className='input-in' type="text" id="proj2_title" value={form.proj2_title} onChange={(e) => setForm({...form, proj2_title: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="proj2_link">LinkTwo</label>
                <input className='input-in' type="text" id="proj2_link" value={form.proj2_link} onChange={(e) => setForm({...form, proj2_link: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="proj2_desc">DescriptionTwo</label>
                <input className='input-in' type="text" id="proj2_desc" value={form.proj2_desc} onChange={(e) => setForm({...form, proj2_desc: e.target.value})}/>
            </div>
        </form>
    </div>
  )
}

export default Project