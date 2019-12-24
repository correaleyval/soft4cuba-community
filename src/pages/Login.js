import React from 'react'

import logo from '../static/logo.png'

import { Redirect } from '@reach/router'

import { connect } from 'react-redux'

import { SET_LOGIN } from '../store/actions/actionsLogin'

const LoginPage = ({ SET_LOGIN, login }) => {

    if (login)
        return (<Redirect to="/" noThrow />)
    else
        return (

            <div className="row">
                <div className="cell-md-8 cell-sm-12 offset-md-2">
                    <div className="card image-header">
                        <div className="card-header"
                            style={{ backgroundImage: `url(${logo})` }}
                        >
                        </div>
                        <div className="card-content p-2">
                            <h5>
                                <p className="fg-blue">Soft<strong className="fg-red">4</strong>Cuba</p>
                            </h5>
                            <p>
                                es una comunidad abierta para desarrolladores, diseñadores e innovadores
                                cubanos. En Soft4Cuba se reúnen programadores, diseñadores e innovadores cubanos con
                                el objetivo de expresar sus ideas y formar grupos de desarrollo para materializarlas.
                        </p>
                        </div>
                        <div className="card-footer">
                            <a rel="noopener noreferrer" target="_blank" className="fg-blue button outline" href="https://www.soft4cuba.com">Saber más</a>
                            <div onClick={() => SET_LOGIN(true)} className="button outline fg-blue">
                                <i className="fa fa-github"></i>  Entrar
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

const mapStateToProps = ({ loginReducer }) => ({ login: loginReducer.login })

const mapDispatchToProps = {
    SET_LOGIN
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
