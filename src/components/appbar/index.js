import React from 'react'

import { Link } from '@reach/router'
// import logo from '../../static/profile_test.png'

const AppBar = () => (
    <div data-role="appbar" data-expand-point="md">
        <Link to='/' className="brand fg-blue no-hover">
            Soft<strong className="fg-red">4</strong>Cuba Community
        </Link>

        <ul className="app-bar-menu">
            <Link className="app-bar-item fg-blue" to='/developers'><i className="fa fa-2x fa-users fg-blue"></i> Developers</Link>
            <Link className="app-bar-item fg-blue" to='/proyects'><i className="fa fa-2x fa-code fg-blue"></i> Proyects</Link>
        </ul>

    </div>
)

export default AppBar
