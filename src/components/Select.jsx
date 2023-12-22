import React, { useId } from 'react';

// A custom Select component with label and optional className
function Select(
  {
    options,
    label,
    className,
    ...props
  },
  ref
) {
  // Generate a unique ID for accessibility
  const id = useId();

  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}

      {/* The select element with dynamic attributes */}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none
          focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

// Export the Select component with forwardRef for ref handling
export default React.forwardRef(Select);
