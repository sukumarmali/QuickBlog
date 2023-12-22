// Importing necessary libraries and components
import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Defining the Header component
function Header() {
  // Getting the authentication status from Redux
  const authStatus = useSelector((state) => state.auth.status);

  // Initializing the navigation function
  const navigate = useNavigate();

  // Defining navigation items with their names, URLs, and activation conditions
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true, // Home is always active
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus, // Login is active if the user is not authenticated
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus, // Signup is active if the user is not authenticated
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus, // All Posts is active if the user is authenticated
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus, // Add Post is active if the user is authenticated
    },
  ];

  return (
    // Applying styling to the header container
    <header className='py-3 shadow bg-black'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              {/* Displaying the logo and linking it to the home page */}
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              // Rendering navigation buttons based on activation conditions
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='text-white inline-bock px-6 py-2 duration-200 hover:bg-orange-500 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {/* Displaying a logout button if the user is authenticated */
            authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
