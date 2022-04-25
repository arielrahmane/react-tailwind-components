import React, { useState } from 'react';
import { N1, N1Props } from './components/Navbars/N1';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navbarProps: N1Props = {
    heading: 'Navbar Component',
    items: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'About Us',
        href: 'about',
      },
      {
        label: 'Docs',
        href: 'docs',
      },
      {
        label: 'FAQs',
        href: 'faqs',
      },
      {
        label: 'Contact',
        href: 'contact',
      },
    ],
    specialItems: [
      {
        label: 'Login',
        href: 'login',
      },
      {
        label: 'Register',
        href: 'register',
      },
    ],
    backgroundColor: 'bg-amber-500',
    onMenuClose: closeMenu,
    onMenuOpen: openMenu,
  };
  return (
    <div>
      <N1
        items={navbarProps.items}
        specialItems={navbarProps.specialItems}
        heading={navbarProps.heading}
        backgroundColor={navbarProps.backgroundColor}
        onMenuClose={navbarProps.onMenuClose}
        onMenuOpen={navbarProps.onMenuOpen}
      />
      {isMenuOpen && <h1>Menu simulator</h1>}
    </div>
  );
}

export default App;
