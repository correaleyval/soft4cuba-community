import React from 'react'

import { Helmet } from 'react-helmet'

import AppBar from '../appbar'
import Bottombar from '../bottombar'

import { connect } from 'react-redux'

import { COS_LOAD_USERS, COS_LOAD_REPOS, COS_LOADED } from '../../store/actions/cosActions.js'

const request = require('superagent')

const config = require('../../config/config')

const Layout = ({ children, title, login,
  COS_LOAD_USERS, COS_LOAD_REPOS, COS_LOADED, loaded } = {}) => {

    //if (!login)
    //    return (
    //        <Redirect to="login" noThrow />
    //    )
    //else
    if (!loaded) {
      request.get(`${config.cos_api_url}users`)
      .then(res => {
        // console.log(res.body)
        COS_LOAD_USERS(res.body.users)
      })

      request.get(`${config.cos_api_url}repos`)
      .then(res => {
        //console.log(res.body)
        COS_LOAD_REPOS(res.body.repos)
      })

      COS_LOADED(true)
    }

        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <AppBar />
                <div className="mt-15">
                {
                    children
                }
                </div>
                <Bottombar />
            </div>
        )
}

const mapStateToProps = ({ loginReducer, cosReducer }) => ({
  login: loginReducer.login,
  loaded: cosReducer.loaded
})

const mapDispatchToProps = {
  COS_LOAD_USERS,
  COS_LOAD_REPOS,
  COS_LOADED
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
