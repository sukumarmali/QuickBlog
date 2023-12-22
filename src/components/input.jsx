import React from 'react';
import { useId } from 'react';

// Input component with a label, type, and additional props
const Input = React.forwardRef(function Input({
  label,                     // Label text for the input
  type = 'text',            // Input type (default: text)
  className = '',          // Additional CSS classes by user
  ...props                // Additional input props
}, ref) {
  // Generate a unique ID for the input element
  const id = useId();

  return (
    <div className='w-full'>
      {label && (
        // Render the label if provided
        <label className='inline-block mb-1 pl-1' htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none
          focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}           // Forwarding the ref
        {...props}         // Spread any additional props
        id={id}           // Set the input's ID to match the label's "for" attribute
      />
    </div>
  );
});

export default Input;
