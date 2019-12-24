import React from 'react'

const RepoCard = ({repo}) => {

  if(repo.name)
    return (
      <div className="cell-md-4 cell-sm-12">
        <div className="card">
          <div className="card-header">
            <h6 className="card-title">{repo.name}</h6>
          </div>
          <div className="card-content p-2">
            <strong><i className="fa fa-github"></i> </strong> <a href={repo.html_url} target="_blanck">{repo.full_name}</a><br />
            <p>{repo.description}</p>
        </div>
        <div className="card-footer">
            <strong><i className="fa fa-code"></i> {repo.language}</strong>
            <strong><i className="fa fa-thumbs-o-up"></i> {repo.stargazers_count} </strong>
        </div>
    </div>
  </div>
)

  else
    return(
      <p></p>
    )

}

export default RepoCard
