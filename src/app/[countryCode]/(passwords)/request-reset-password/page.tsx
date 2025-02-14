import React from 'react'
import RequestResetPassword from '@modules/account/components/forgot-password'
import Nav from '@modules/layout/templates/nav'
import Footer from '@modules/layout/templates/footer'
const page = () => {
  return (
    <>
    <Nav/>
    <RequestResetPassword />
    <Footer/>
    </>
  )
}

export default page