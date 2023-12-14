import React from 'react'

const Education = ({ form, setForm }) => {
    /*edu1_school:"",
        edu1_year:"",
        edu1_qualification:"",
        edu1_desc:"",
        edu2_school:"",
        edu2_year:"",
        edu2_qualification:"",
        edu2_desc:"",*/

    return (
        <div>
            <form className='grid grid-cols-2 gap-5'>
                <div className='box-input'>
                    <label className='font-semibold text-sm mb-1' htmlFor="edu1_school">Enter your first institute name</label>
                    <input className='input-in' type="text" id="edu1_school" value={form.edu1_school} onChange={(e) => setForm({ ...form, edu1_school: e.target.value })} />
                </div>
                <div className='box-input'>
                    <label className='font-semibold text-sm mb-1' htmlFor="edu1_year">Year of passing</label>
                    <input className='input-in' type="text" id="edu1_year" value={form.edu1_year} onChange={(e) => setForm({ ...form, edu1_year: e.target.value })} />
                </div>
                <div className='box-input'>
                    <label className='font-semibold text-sm mb-1' htmlFor="edu1_qualification">Qualification</label>
                    <input className='input-in' type="text" id="edu1_qualification" value={form.edu1_qualification} onChange={(e) => setForm({ ...form, edu1_qualification: e.target.value })} />
                </div>
                <div className='box-input'>
                    <label className='font-semibold text-sm mb-1' htmlFor="edu1_desc">Enter a short Description</label>
                    <input className='input-in' type="text" id="edu1_desc" value={form.edu1_desc} onChange={(e) => setForm({ ...form, edu1_desc: e.target.value })} />
                </div>
                <div className='box-input'>
                    <label className='font-semibold text-sm mb-1' htmlFor="edu2_school">Enter your second institute name</label>
                    <input className='input-in' type="text" id="edu2_school" value={form.edu2_school} onChange={(e) => setForm({ ...form, edu2_school: e.target.value })} />
                </div>
                <div className='box-input'>
                    <label className='font-semibold text-sm mb-1' htmlFor="edu2_year">Year of passing</label>
                    <input className='input-in' type="text" id="edu2_year" value={form.edu2_year} onChange={(e) => setForm({ ...form, edu2_year: e.target.value })} />
                </div>
                <div className='box-input'>
                    <label className='font-semibold text-sm mb-1' htmlFor="edu2_desc">Enter a short Description</label>
                    <input className='input-in' type="text" id="edu2_desc" value={form.edu2_desc} onChange={(e) => setForm({ ...form, edu2_desc: e.target.value })} />
                </div>
            </form>
        </div>
    )
}

export default Education