/* eslint-disable prettier/prettier */
import * as React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import NotFound from '../pages/NotFound/NotFound'
import RegisterForm from '../pages/Register/Register'
import LoginForm from '../pages/Login/Login'

export default function Routes(): ReactNode {
    return useRoutes([
        { path: '404', element: <NotFound /> },
        {
            path: '/register',
            element: <RegisterForm />,
        },
        {
            path: '/login',
            element: <LoginForm />,
        },

        {
            path: '*',
            element: <Navigate to="/404" />,
        },
    ])
}
