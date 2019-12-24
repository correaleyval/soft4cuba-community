import React from 'react'

import { Link } from '@reach/router'

const Bottombar = () => (
    <div className="bottom-nav fixed-bottom no-visible-sm">
        <Link className="button fg-blue" to='/developers'><i className="fa fa-2x fa-users fg-blue"></i><span className="label">Developers</span></Link>
        <Link className="button fg-blue" to='/proyects'><i className="fa fa-2x fa-code fg-blue"></i><span className="label">Proyects</span></Link>
    </div>
)

export default Bottombar
