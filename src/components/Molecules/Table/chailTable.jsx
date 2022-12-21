import React from 'react'
import { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import './Style.css'

const ChailTable = ({data}) => {
    const [action, setAction] = useState(false)
    const handleStattus = () =>{
        setAction(!action)
    }
  return (
    <tr >
        <th scope="col " className='justify-content-start' style={{width: '300px'}}>{data.id}</th>
        <th scope="col" className='justify-content-center' style={{width: '300px'}}>{data.name}</th>
        <th scope="col" className='justify-content-start' style={{width: '300px'}}>{data.age}</th>
        <th scope="col" className='justify-content-start'>{data.gender}</th>
        <th scope="col" role='button'>
            <span style={action ? {backgroundColor: '#B8DDB2'} : {} } className={action ? `py-1 px-3 rounded-3 text-success px-3` : `bgprocess py-1 px-2 rounded-3 `}>{action ? 'Done' : 'Process'}</span>
        </th>
        <th scope="col"  role='button' className='text-end'>
            <AiFillEye className='fs-4 ms-4'/>
        </th>
    </tr>
  )
}

export default ChailTable