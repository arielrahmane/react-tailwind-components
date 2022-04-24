import React from 'react';
import { N1, N1Props } from './components/Navbars/N1';

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
};

function App() {
  return (
    <div>
      <N1
        items={navbarProps.items}
        specialItems={navbarProps.specialItems}
        heading={navbarProps.heading}
        backgroundColor={navbarProps.backgroundColor}
      />
    </div>
  );
}

export default App;
