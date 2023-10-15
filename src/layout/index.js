import React from 'react'
import Header from './header'
import Footer from './footer'
import {BsFillTelephoneFill} from 'react-icons/bs'
import logoImg from '../images/logo.svg'

const Layout = () => {
  return (
    <>
    <Header logo={logoImg} icon={<BsFillTelephoneFill/>}/>
    <h1>Children</h1>
    <Footer logo={logoImg} icon={<BsFillTelephoneFill/>}/>
    </>
  )
}

export default Layout