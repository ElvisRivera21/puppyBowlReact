// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{ backgroundColor: 'black', display: 'flex'}}>;
            <Link to='/'>Home</Link>
            <Link to='/players/1'>Player 1</Link>
            <Link to='/players/2'>Player 2</Link>
        </nav>
    )
};

export default NavBar;