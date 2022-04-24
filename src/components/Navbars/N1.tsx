import classNames from 'classnames';
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
    <nav className={classNames(backgroundColor, 'relative mb-3 px-2 py-3')}>
      {/* Container */}
      <div className="w-full mx-5 flex grow flex-row">

        {/* Heading */}
        <div className="relative mr-4 ml-10 py-2">
          <p
            className={classNames(
              textColor,
              textCase,
              'inline-block whitespace-nowrap text-lg font-bold leading-relaxed'
            )}
          >
            {heading}
          </p>
        </div>

        {/* Items */}
        <div className="ml-10 flex items-center">
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
        {(specialItems !== undefined && specialItems.length > 0) && (
          <div className="flex mx-16 grow items-center">
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
    </nav>
  );
}

N1.defaultProps = defaultProps;
