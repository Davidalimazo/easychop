import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Fallback from './pages/Fallback';
import WhatWillLikeToDo from './pages/liketodo/WhatWillLikeToDo';
import SelectStoreType from './pages/select/SelectStoreType';
const Auth = React.lazy(()=>import('./components/Auth'))
const Layout = React.lazy(()=>import('./components/Layout'))
const Login = React.lazy(()=>import('./pages/login/Login'))
const Register = React.lazy(()=>import('./pages/register/Register'))
const NotFound = React.lazy(()=>import('./pages/NotFound'))


export default function App() {
  const isAuth = false;
 
  return (
    <div>
    <React.Suspense fallback={<Fallback/>}>
      <Routes>
        <Route path='/' element={isAuth ?<WhatWillLikeToDo/>: <Navigate to='/auth'/>} />
        <Route path='home' element={isAuth ?<Layout/> : <Navigate to='/auth'/>} />
        <Route path='select' element={isAuth ?<SelectStoreType/> : <Navigate to='/auth'/>} />
        <Route path='auth' element={isAuth ?<Navigate to='/'/> : <Auth/>}>
          <Route index element={<Login/>} />
          <Route path='register' element={<Register/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </React.Suspense>
    </div>
  )
}
