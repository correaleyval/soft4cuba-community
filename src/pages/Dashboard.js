import React from 'react'

import Layout from '../components/general/layout'

import { Redirect } from '@reach/router'

const DashboardPage = () => {
  return (
    <Layout title="Soft4Cuba - Dashboard">
      <Redirect to="developers" noThrow />
    </Layout>
  )
}

export default DashboardPage
