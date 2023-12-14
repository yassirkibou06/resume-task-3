import React from 'react'

const Experiences = ({form, setForm}) => {
    /*exp1_org:"",
        exp1_pos:"",
        exp1_desc:"",
        exp1_dur:"",
        exp2_org:"",
        exp2_pos:"",
        exp2_desc:"",
        exp2_dur:"",*/
  return (
    <div>
       <form className='grid grid-cols-2 gap-5'>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="exp1_org">Company Name</label>
                <input className='input-in' type="text" id="exp1_org" value={form.exp1_org} onChange={(e) => setForm({...form, exp1_org: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="exp1_pos">Position</label>
                <input className='input-in' type="text" id="exp1_pos" value={form.exp1_pos} onChange={(e) => setForm({...form, exp1_pos: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="exp1_desc">Description</label>
                <input className='input-in' type="text" id="exp1_desc" value={form.exp1_desc} onChange={(e) => setForm({...form, exp1_desc: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="exp1_dur">Duration</label>
                <input className='input-in' type="text" id="exp1_dur" value={form.exp1_dur} onChange={(e) => setForm({...form, exp1_dur: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="exp2_org">Company Name</label>
                <input className='input-in' type="text" id="exp2_org" value={form.exp2_org} onChange={(e) => setForm({...form, exp2_org: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="exp2_pos">Position</label>
                <input className='input-in' type="text" id="exp2_pos" value={form.exp2_pos} onChange={(e) => setForm({...form, exp2_pos: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="exp2_desc">Description</label>
                <input className='input-in' type="text" id="exp2_desc" value={form.exp2_desc} onChange={(e) => setForm({...form, exp2_desc: e.target.value})}/>
            </div>
            <div className='box-input'>
                <label className='font-semibold text-sm mb-1' htmlFor="exp2_dur">Duration</label>
                <input className='input-in' type="text" id="exp2_dur" value={form.exp2_dur} onChange={(e) => setForm({...form, exp2_dur: e.target.value})}/>
            </div>
        </form>
    </div>
  )
}

export default Experiences