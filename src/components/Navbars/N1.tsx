import classNames from 'classnames';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';

export interface N1Item {
  label: string;
  href: string;
}

export interface N1Props {
  /** Mandatory props */
  items: N1Item[];
  heading: string;
  onMenuOpen: () => void;
  onMenuClose: () => void;
  /** Optional Props */
  specialItems?: N1Item[];
  /** Styling props */
  backgroundColor?: string;
  textColor?: string;
  textCase?: string;
}

const defaultProps = {
  specialItems: [],
  backgroundColor: 'bg-blue-500',
  textColor: 'text-white',
  textCase: 'uppercase',
};

export function N1(props: N1Props) {
  const {
    items,
    specialItems,
    heading,
    backgroundColor,
    textColor,
    textCase,
    onMenuClose,
    onMenuOpen,
  } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => {
    if (isMenuOpen) onMenuClose();
    else onMenuOpen();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={classNames(
        backgroundColor,
        'relative flex w-full grow flex-row overflow-hidden px-2 py-3'
      )}
    >
      <button
        type="button"
        className="relative text-white lg:hidden"
        onClick={() => onMenuClick()}
      >
        <span>
          {!isMenuOpen && <MenuIcon className="h-12 w-12 py-2" />}
          {isMenuOpen && <XIcon className="h-12 w-12 py-2" />}
        </span>
      </button>

      {/* Heading */}
      <div className="relative mr-4 ml-10 py-2">
        <p
          className={classNames(
            textColor,
            textCase,
            'inline-block text-lg font-bold leading-relaxed'
          )}
        >
          {heading}
        </p>
      </div>

      {/* Items */}
      <div className="hidden py-2 lg:ml-10 lg:flex lg:items-center">
        <ul className="ml-auto flex list-none flex-row">
          {items.map((item: N1Item) => (
            <li key={item.label} className="flex items-center">
              <a
                className={classNames(
                  textColor,
                  textCase,
                  'ml-5 cursor-pointer items-center px-3 text-xs font-bold leading-snug hover:opacity-75'
                )}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Special Items */}
      {specialItems !== undefined && specialItems.length > 0 && (
        <div className="mr-10 hidden grow items-center py-2 sm:flex">
          <ul className="ml-auto flex list-none flex-row items-center">
            {specialItems.map((item: N1Item) => (
              <li key={item.label} className="flex items-center">
                <a
                  className={classNames(
                    textColor,
                    textCase,
                    'ml-5 cursor-pointer px-3 text-xs font-bold leading-snug hover:opacity-75'
                  )}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

N1.defaultProps = defaultProps;
