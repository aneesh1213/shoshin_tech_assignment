import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { JobCard } from './components/JobCard'
import { EmployeeCard } from './components/EmployeeCard'
import { SideBar } from './components/SideBar'
import { NavBar } from './components/NavBar'


function App() {
  
  return (

    <div className='flex'>
      <div  >
        <SideBar />
      </div>
      <div>
        <NavBar />  

      </div >
      <div className=''>
        <JobCard neededCnt={10} empcnt={5} />
      </div>
      
      <div>
        <EmployeeCard totalemployees={216} totalmen={130} totalwomen={30} growthpercentage={5} />
      </div>
      
    </div>
    

  )

}

export default App
