import React, { useEffect, useState } from 'react'
import formater from './formater'
import gitimg2 from '../assets/github 2.png'
import linkdinImg from '../assets/linked din.jpeg'
import { Link } from 'react-router-dom'

const Card = () => {
    let [data, setData] = useState([]);
const fetchData = async() => {
  let a = await fetch('https://skolar-student-backend-server.vercel.app/fetchall');
  let b = await a.json();
  setData(b)
  // console.log(setData)
  // console.log(b);
}
useEffect(()=> {
 fetchData()
}, [])
  return (
    <>
    <div className='flex flex-row justify-center my-5 md:justify-end lg:justify-end md:mx-24 lg:mx-24 
    
    
    '>
      <Link to='/add'><button className='bg-indigo-500  px-4 py-2 rounded-md  transition-colors duration-300 text-base lg:text-lg md:lg:text-lg text-white hover:bg-blue-500 '>Add Your Profile</button></Link>
      </div>
    <div className='container flex flex-col justify-center align-middle items-center flex-wrap md:flex-row md:flex-wrap md:h-screen lg:flex-row lg:flex-wrap lg:h-screen md:justify-start lg:justify-start md:items-start lg:items-start overflow-x-auto overflow-y-auto'>


        {
          data.map((card)=> {
            return <div key={card._id} className="mx-4 my-4 card border  rounded-xl h-80 w-72 bg-zinc-100">
          <h2 className="mt-5 name text-center text-2xl capitalize font-extralight text-gray-800 mb-4 font-mono">{card.name}</h2>

          <div className="mt-10 github flex flex-row justify-center align-middle">
          <a className='' href={formater(card.gitlink)}  target='blank'><img className='h-14 border rounded-xl 
           hover:contrast-200 hover:brightness-150 hover:grayscale-150 drop-shadow-2xl' src={gitimg2} alt="" /></a>
          </div>
           
           <div className="linkdin flex flex-row justify-center align-bottom mt-14">

          <a href={formater(card.linkdin)}  target='blank'><img className='h-14 border rounded hover:saturate-200 hover:contrast-200 hover:brightness-100 grayscale hover:grayscale-0 hover:relative hover:mt-1 drop-shadow-2xl' src={linkdinImg} alt="" /></a>
           </div>

        </div>
        })
      }
        </div>
      </>
  )
}

export default Card
