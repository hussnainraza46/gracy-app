import React from 'react'
import Logo from '../../components/logo'
import Navbar from '../../dashboard-comp/navbar'
import Sidebar from '../../dashboard-comp/Sidebar'

// Pages
import Dispatch from './Dispatch'


export default function Dashboard() {
  return (
    <div className='h-[100vh] bg-[#F6F7FB]'>
       <Navbar/>
       <Sidebar/>
    </div>
  )
}
