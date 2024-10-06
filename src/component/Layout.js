import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import MyRoute from './MyRoute'

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-page">
          <MyRoute />
         </div> 
         <Footer />  
      </div>
    </>
  )
}

export default Layout