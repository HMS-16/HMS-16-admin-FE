import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Molecules/Navbar/Navbar'
import './Style.css'

const EditAdmin = () => {
    const [data, setData] = useState({
        name: 'jond doe',
        email: 'basing@gmail.com',
        phone: '081234123321',
    })
    const updateData = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate()
  return (
    <div >
        <Navbar name="Setting"/>
        <h1 className='text-start my-5'><b>Personal Information</b></h1>
        <div className='mx-5 shadow p-3 mb-5 bg-body rounded-4 '>
            <div className='d-flex mx-5 mb-5 mt-3'>
                <div className='col-6 px-5'>
                <label  htmlFor="inputusename" className='text-start row'>Full Name</label>
                    <div className='row'>
                        <input type="text" value={'admin'} id='inputusename' className='form-control shadow-none rounded-2' />
                    </div>
                </div>
                <div className='col-6 px-5'>
                    <label  htmlFor="inputusename" className='text-start row'>Username</label>
                    <div className='row'>
                        <input type="text" id='inputusename' value={'jonddoe'} disabled className='form-control shadow-none rounded-2' />
                    </div>
                </div>
            </div>
            <div className='d-flex mx-5 mb-4 '>
                <div className='col-6 px-5'>
                <label  htmlFor="inputusename" className='text-start row'>Phone Number</label>
                    <div className='row'>
                        <input type="text" id='inputusename' value={'081234123321'} className='form-control shadow-none rounded-2' />
                    </div>
                </div>
                <div className='col-6 px-5'>
                    <label  htmlFor="inputusename" className='text-start row'>Email</label>
                    <div className='row'>
                        <input type="text" id='inputusename' value={'admin@hms.com'} className='form-control shadow-none rounded-2' />
                    </div>
                </div>
            </div>
        </div>
        <div className='d-flex mx-5 justify-content-end align-items-center'>
            <span className='btSave fs-5 py-2 px-5 rounded-4 mx-3 text-white' role={'button'}>Save</span>
            <span onClick={()=>{navigate('/dashboard')}} className='btCancel fs-5 py-2 px-5 rounded-4' role={'button'}><b>Cancel</b></span>
        </div>
    </div>
  )
}

export default EditAdmin