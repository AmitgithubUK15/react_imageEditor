import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar/Navbar'
import LoadingSpinner from './components/LoadingEffect/LoadingSpinner';

const Home = React.lazy(() => import('./pages/Home/Home'));
const ImageEditMainPage = React.lazy(()=> import('./pages/Editing Pages/ImageEdit/ImageEditMainPage'))

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Suspense fallback={
        <LoadingSpinner />
      }>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/design' element={<ImageEditMainPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
