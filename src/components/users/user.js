import React from 'react'

const UserCard = ({user}) => {

  if(user)
    return (
      <div className="cell-md-4 cell-sm-12">
        <div className="card">
          <div className="card-header">
            <img src={user.avatar_url} alt="avatar" style={{ width: "25%" }} />
            <h6 className="card-title">{user.name}</h6>
          </div>
          <div className="card-content p-2">
            <p>
                <strong><i className="fa fa-github"></i> </strong> <a href={user.html_url} target="_blanck">{user.login}</a><br />
                <strong>Company: </strong> {user.company} <br />
                <strong>Blog: </strong> <a href={user.blog} target="_blanck" className="blue-text">{user.blog}</a> <br />
                <strong>Email: </strong> {user.email} <br />
                <strong>De: </strong> {user.location} <br />
            </p>
            <p>
                {user.bio}
            </p>
        </div>
    </div>
  </div>
)

  else
    return(
      <div className="cell-md-4 cell-sm-12">
        <div className="card">
          <div data-role="activity" data-type="metro" data-style="color"></div>
        </div>
      </div>
    )

}

export default UserCard
