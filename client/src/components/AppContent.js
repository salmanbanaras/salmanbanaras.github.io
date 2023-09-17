import React, { Suspense } from 'react'
import { Navigate, Route, Routes, Redirect } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = () => {
  const isAuthenticated = false;
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        {isAuthenticated ? 
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes> : 
        <Navigate to="login" replace />}
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
