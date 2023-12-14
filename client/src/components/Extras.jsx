import React from 'react'

const Extras = ({ form, setForm }) => {
    /* extra_1:"",
        extra_2:"",*/
    return (
        <div>
            <form className='grid gap-5'>
                <h3 className="font-semibold">Languages you can speak</h3>
                <div className='box-input'>
                    <label className='text-sm mb-1' htmlFor="extra_1">Languages</label>
                    <input className='input-in' type="text" id="extra_1" value={form.extra_1} onChange={(e) => setForm({ ...form, extra_1: e.target.value })} />
                </div>
                <h3 className="font-semibold">Things you like to do</h3>
                <div className='box-input'>
                    <label className='text-sm mb-1' htmlFor="extra_2">Hobbies</label>
                    <input className='input-in' type="text" id="extra_2" value={form.extra_2} onChange={(e) => setForm({ ...form, extra_2: e.target.value })} />
                </div>
            </form>
        </div>
    )
}

export default Extras