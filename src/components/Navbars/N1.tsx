import classNames from 'classnames';
import React from 'react';

export interface N1Item {
  name: string;
  href?: string;
}

export interface N1Props {
  /** Mandatory props */
  items: N1Item[];
  heading: string;
  /** Styling props */
  backgroundColor?: string;
  textColor?: string;
  textCase?: string;
}

const defaultProps = {
  backgroundColor: 'bg-blue-500',
  textColor: 'text-white',
  textCase: 'uppercase',
};

export function N1(props: N1Props) {
  const { items, heading, backgroundColor, textColor, textCase } = props;

  return (
    <nav
      className={classNames(
        backgroundColor,
        'relative mb-3 flex flex-wrap items-center justify-between px-2 py-3'
      )}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Heading */}
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <p
            className={classNames(
              textColor,
              textCase,
              'mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold leading-relaxed'
            )}
          >
            {heading}
          </p>
        </div>
        {/* Items */}
        <div className="flex grow items-center lg:flex">
          <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
            {items.map((item: N1Item) => (
              <li key={item.name}>
                <a
                  className={classNames(
                    textColor,
                    textCase,
                    'flex cursor-pointer items-center px-3 py-2 text-xs font-bold leading-snug hover:opacity-75'
                  )}
                  href={item.href ? item.href : ''}
                >
                  <i className={classNames(textColor, 'text-lg opacity-75')} />
                  <span className="ml-2">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

N1.defaultProps = { ...defaultProps };
