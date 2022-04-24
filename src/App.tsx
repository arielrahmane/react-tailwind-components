import React from 'react';
import { N1, N1Item, N1Props } from './components/Navbars/N1';

const navbarItems: N1Item[] = [
  {
    name: 'Pictures',
    href: 'pictures',
  },
  {
    name: 'Item2',
  },
];

const navbarProps: N1Props = {
  items: navbarItems,
  heading: 'Navbar Test',
  backgroundColor: 'bg-amber-500',
};

function App() {
  return (
    <div>
      <N1
        items={navbarProps.items}
        heading={navbarProps.heading}
        backgroundColor={navbarProps.backgroundColor}
      />
    </div>
  );
}

export default App;
