import React from 'react';

// Define the Container component which wraps its children
function Container({ children }) {
  return  (
    // Render a container div with specific styling
    <div className='w-full max-w-7xl mx-auto px-4'>
      {children}
    </div>
  );
}

export default Container;
