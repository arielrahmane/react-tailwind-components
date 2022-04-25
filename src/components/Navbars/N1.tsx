import classNames from 'classnames';
import { MenuIcon } from '@heroicons/react/outline';
import React from 'react';

export interface N1Item {
  label: string;
  href: string;
}

export interface N1Props {
  /** Mandatory props */
  items: N1Item[];
  heading: string;
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
  const { items, specialItems, heading, backgroundColor, textColor, textCase } = props;

  return (
    <div
      className={classNames(
        backgroundColor,
        'relative flex w-full grow flex-row px-2 py-3 overflow-hidden'
      )}
    >
      <div className="relative text-white lg:hidden">
        <MenuIcon className="py-2 w-12 h-12" />
      </div>

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
      <div className="hidden lg:ml-10 lg:flex lg:items-center py-2">
        <ul className="ml-auto flex list-none flex-row">
          {items.map((item: N1Item) => (
            <li key={item.label}>
              <a
                className={classNames(
                  textColor,
                  textCase,
                  'ml-5 cursor-pointer items-center px-3 py-2 text-xs font-bold leading-snug hover:opacity-75'
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
          <ul className="ml-auto flex list-none flex-row">
            {specialItems.map((item: N1Item) => (
              <li key={item.label}>
                <a
                  className={classNames(
                    textColor,
                    textCase,
                    'ml-5 cursor-pointer items-center px-3 py-2 text-xs font-bold leading-snug hover:opacity-75'
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
