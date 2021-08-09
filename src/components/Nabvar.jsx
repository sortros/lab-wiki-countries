import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="bg-blue-500 py-4 text-left sticky top-0">
        <Link to="/"><p className="ml-6 text-xl font-bold text-white">Wiki Countries</p></Link>
    </nav>
  )
}

export default navbar;