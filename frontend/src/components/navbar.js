import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/notes">Note List</Link></li>
                    <li><Link to="/profile">Profile </Link></li>
                </ul>
            </nav>

        )

    }

}

export default Navbar;