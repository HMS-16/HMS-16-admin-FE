import React from 'react'
import './Style.css'
import {FaUserNurse} from 'react-icons/fa'
import {GiNurseMale} from 'react-icons/gi'
import {BiUser} from 'react-icons/bi'
import UseTotalDasboard from './useTotalDasboard'

const TotalDasboard = () => {
    const {totalPatien, totalDoctor, totalnurses} = UseTotalDasboard()
    console.log(totalnurses, 'wkwk');
  return (
    <div className="shadow p-3 mb-5 bg-body rounded-5 mt-5 d-flex justify-content-between px-5 rounded-3 ">
        <div className='d-flex align-items-center'>
            <div className='icontotal p-4 rounded-circle text-white me-4'>
                <BiUser className='fs-1 ' />
            </div>
            <div>
                <h1 className='fs-4 fw-normal'>Total Patient</h1>
                <h1 className='fontBold fs-3'>{totalPatien ? totalPatien.data.length : ''}</h1>
            </div>
        </div>
        <div className='d-flex align-items-center'>
            <div className='icontotal p-4 rounded-circle text-white me-4'>
                <GiNurseMale className='fs-1 ' />
            </div>
            <div>
                <h1 className='fs-4 fw-normal'>Total Doctor</h1>
                <h1 className='fontBold fs-3'>{totalDoctor ? totalDoctor.data.length : ''}</h1>
            </div>
        </div>
        <div className='d-flex align-items-center'>
            <div className='icontotal p-4 rounded-circle text-white me-4'>
                <FaUserNurse className='fs-1 ' />
            </div>
            <div>
                <h1 className='fs-4 fw-normal'>Total Nurse</h1>
                <h1 className='fontBold fs-3'>{totalnurses ? totalnurses.data.length : ''}</h1>
            </div>
        </div>
    </div>
  )
}

export default TotalDasboard