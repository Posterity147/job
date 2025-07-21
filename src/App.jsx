import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Opening from './pages/Opening'
import Footer from './components/Footer'
import Hrm from './pages/Hrm'
import Reviews from './pages/Reviews'
import Staffs from './pages/Staffs'
import About from './pages/About'
import Services from './pages/Services'
import Faqs from './pages/Faqs'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import Claim from './pages/Claim'
import Dashboard from './pages/Dashbaord'
import Onboarding from './pages/Onboarding'
import ChatSupport from './pages/Chartsupport'
import Billingandclaim from './pages/Billingandclaim'
import VirtualAssistant from './pages/Virtualassistant'
import DataEntry from './pages/Dataentry'
import SocialMedia from './pages/Socialmedia'
import CustomerService from './pages/Customerservice'








function App() {
  return (
   <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/hrm' element={<Hrm/>} />
          <Route path='/reviews' element={<Reviews />} />
        <Route path='/openings' element={<Opening />} />
        <Route path='/staffs'  element= {<Staffs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>} />
        <Route path='/faqs' element={<Faqs/>} />
        <Route path= '/contact' element={<Contact/>}/>
       < Route path='/quote' element={<Quote/>}/>
       <Route path= '/claim'  element= {<Claim/>}/>
       <Route path= '/dashboard' element= {<Dashboard/>}/>
       <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/chatsupport' element={<ChatSupport />}/>
        <Route path='/billingandclaim' element={<Billingandclaim />} />
        <Route path='/virtualassistant' element={<VirtualAssistant />} />
        <Route path='/dataentry' element={<DataEntry />} />
        <Route path='/socialmedia' element={<SocialMedia />} />
        <Route path='/customerservice' element={<CustomerService/>} />




      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App