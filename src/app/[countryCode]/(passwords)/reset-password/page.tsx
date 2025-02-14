import React from 'react'
import ResetPassword from '@modules/account/components/reset-password'
import Nav from '@modules/layout/templates/nav'
import Footer from '@modules/layout/templates/footer'
function page() {
  return (
    <>
    <Nav/>
    <ResetPassword />
    <Footer/>
    </>
  )
}

export default page