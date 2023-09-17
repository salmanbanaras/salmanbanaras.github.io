import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://wobb.ai" target="_blank" rel="noopener noreferrer">
         Salman Banaras Trading Company
        </a>
        <span className="ms-1">&copy; 2023 </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Contact</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          faridiaaquib003@gmail.com
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
