import React from 'react';
import { Router } from '@reach/router'

import Dashboard from './pages/Dashboard'
import LoginPage from './pages/Login'
import ProyectsPage from './pages/Proyects'
import UsersPage from './pages/Users'
import ProfilePage from './pages/Profile'

// redux
import { store } from './store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Router basepath='/'>
        <Dashboard path='/' />
        <ProyectsPage path='proyects' />
        <UsersPage path='developers' />
        <ProfilePage path='profile' />
        <LoginPage path='login' />
      </Router>
    </Provider>
  )
}

export default App;
