import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <nav
      className="navBar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 6.5%',
        borderBottom: '1px gray solid',
      }}
    >
      <h1
        className="nav__header"
        style={{
          fontSize: '3rem',
        }}
      >
        Math Magicians
      </h1>
      <ul
        className="nav__links"
        style={{
          display: 'flex',
          gap: '15px',
        }}
      >
        {links.map((link) => (
          <li className="nav__link" key={link.id}>
            <NavLink
              style={({ isActive }) => ({
                display: 'block',
                color: isActive ? 'red' : '',
              })}
              to={link.path}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
