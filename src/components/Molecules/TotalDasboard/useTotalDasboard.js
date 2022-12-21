import axios from 'axios'
import React, { useEffect, useState } from 'react'


const UseTotalDasboard = () => {
  const [totalPatien, setTotalPatient] = useState()
  const [totalDoctor, setTotalDoctor] = useState()
  const [totalnurses, setTotalnurses] = useState()

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzE1ODA0MjMsImlhdCI6MTY3MTUzNzIyMywiaWQiOiJmZTMwZDc5My1kOGQxLTQ2ZTItYjUzNS1jZDhkMDE2MGYyNmQiLCJyb2xlIjoiYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWludWppY29iYSJ9.aHCW4CCaAl-GDqrnMrKbUXAobomQiAa23MvgP5uxOuc'
  
  useEffect(()=>{ 
    const response = async () =>{
        try{
            const res = await axios.get('https://hms-api.fly.dev/v1/patients', {
                headers:{'Authorization': `Bearer ${token}`
                }})
                setTotalPatient(res.data)
        } catch (err){
            console.log(err)
        }
    }
    response()
  },[])

  useEffect(()=>{ 
    const repsonse2 = async () =>{
        try{
            const res = await axios.get('https://hms-api.fly.dev/v1/doctors/all',{
            headers:{'Authorization': `Bearer ${token}`
        }})
        setTotalDoctor(res.data)
    } catch (err){
        console.log(err)
    }
    } 
    repsonse2()
},[])
  useEffect(()=>{ 
    const repsonse3 = async () =>{
        try{
            const res = await axios.get('https://hms-api.fly.dev/v1/nurses/all',{
            headers:{'Authorization': `Bearer ${token}`
        }})
        
        if(res.data.data === null){
            setTotalnurses(0)
        } else{
            setTotalnurses(res.data)
        }
        console.log(res.data);
    } catch (err){
        console.log(err)
    }
    } 
    repsonse3()
},[])


  return {totalPatien, totalDoctor, totalnurses}
}

export default UseTotalDasboard