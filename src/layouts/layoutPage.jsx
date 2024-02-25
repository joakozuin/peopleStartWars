import React from 'react'
import { Outlet } from 'react-router-dom'

import Menu from '../components/nabvar/menu'

const layoutPage = () => {
  return (
    <>
      <div>
        <Menu/>
      </div>

      <div className='container p-4'>
      <Outlet />
      </div>

      <div>
        
      </div>
    </>
  )
}

export default layoutPage
