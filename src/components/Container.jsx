import React from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({ className, children }) => {
      return (
            <div className={twMerge('max-w-screen-xl mx-auto px-4 lg:px-0', className)}>
                  {children}
            </div>
      );
};

export default Container;