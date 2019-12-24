import React from 'react'

import avatar from '../../static/profile_test.png'

import { SET_LOGIN } from '../../store/actions/actionsLogin'
import { LOAD_USER } from '../../store/actions/actionsUser'

import { connect } from 'react-redux'

const Profile = ({
    SET_LOGIN, LOAD_USER,
    name, login, company, blog, location, email, bio
}) => {
    LOAD_USER()
    return (

        <div className="row">
            <div className="cell-md-6 cell-sm-12 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <img src={avatar} alt="avatar" style={{ width: "25%" }} />
                        <h6 className="card-title">{name}</h6>
                    </div>
                    <div className="card-content p-2">
                        <p>
                            <strong>Username: </strong> {login} <br />
                            <strong>Company: </strong> {company} <br />
                            <strong>Blog: </strong> <a href={blog} target="_blanck" className="blue-text">{blog}</a> <br />
                            <strong>Email: </strong> {email} <br />
                            <strong>De: </strong> {location} <br />
                        </p>
                        <p>
                            {bio}
                        </p>
                    </div>
                    <div className="card-footer">
                        <div onClick={() => SET_LOGIN(false)} className="fg-blue button outline">
                            <span class="mif-exit"></span>  Logout
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = ({ userReducer }) => ({
    name: userReducer.name,
    login: userReducer.login,
    company: userReducer.company,
    blog: userReducer.blog,
    location: userReducer.location,
    email: userReducer.email,
    bio: userReducer.bio,
})

const mapDispatchToProps = {
    SET_LOGIN,
    LOAD_USER
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)