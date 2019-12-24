import React from 'react'

import { connect } from 'react-redux'

import RepoCard from './repo'

import Loading from '../loading'

const Repos = ({repos}) => {
    if(repos)
        return (
          <div className="row">
              { repos.map((repo, i) => (
                  <RepoCard repo={repo} key={i}/>
              )) }
          </div>
        )
    else
      return(
        <Loading />
      )
}

const mapStateToProps = ({ cosReducer }) => ({
    repos: cosReducer.repos,
})

export default connect(mapStateToProps)(Repos)
