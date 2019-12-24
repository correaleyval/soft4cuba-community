import React from 'react'

import { connect } from 'react-redux'

import UserCard from './user'

import Loading from '../loading'

const Users = ({users}) => {
    if(users)
        return (
          <div className="row">
              { users.map((user, i) => (
                  <UserCard user={user} key={i}/>
              )) }
          </div>
        )
    else
      return(
        <Loading />
      )
}

const mapStateToProps = ({ cosReducer }) => ({
    users: cosReducer.users,
})

export default connect(mapStateToProps)(Users)
