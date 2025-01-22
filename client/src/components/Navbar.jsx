import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Navbar = () => {

    const {user} = useContext(AppContext)
    const navigate = useNavigate()
  return (
    <div className='flex item-center justify-between py-4 '>
     <Link to='/'>
     <img src={assets.download} alt="" className='w-28 sm:w-32 lg:w-40 hover:scale-110 transition-all duration-700' />
     </Link>

     <div>
        {user ?  
        <div className='flex items-center gap-2 sm:gap-3'>
            <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 drop-shadow'>
                <img className='w-5' src={assets.credit_star} alt="" />
                <p>Credits left : 50</p>
            </button>
            <p>Hi.user</p>
            <div className='relative group hover:scale-105 transition-all duration-700 '>
                <img src={assets.profile_icon} className='w-10 drop-shadow ' alt=""/>
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                        <li className='py-1 px-2 cursor-pointer pr-10'>
                            logout
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        :
        <div className='flex item-center gap-2 sm:gap-5'>
            <p onClick={()=>navigate('/buy')} className='cursor-pointer py-2'>Pricing</p>
            <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full hover:scale-105 transition-all duration-700 drop-shadow'>Login</button>
        </div>
        }
       
        
     </div>
    </div>
  )
}

export default Navbar
