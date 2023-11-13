import React, { Suspense } from 'react'
import Header from '../Header/Header'
import Loading from '../Loading/Loading'
import { Outlet } from 'react-router-dom'
import Futter from '../Futter/Futter'

const SharedLayout = ({ children }) => {
    return (
        <div className='wrapper-relative'>
            <Header />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
            {children}
            <Futter />
        </div>)
}

export default SharedLayout