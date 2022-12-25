import React, { forwardRef } from 'react'

const defaultProps = {
    className: undefined,
    value: undefined,
    icon: undefined,
    invalid: false,
    filter: undefined,
    onChange: () => {},
  };

const input = forwardRef(({ icon, className, filter, onChange, ...inputProps }, ref) => {
    const handleChange = event => {
        onChange(event.target.value, event);
    };
  
    return (
      <div className={className}>
        <input {...inputProps} onChange={handleChange}  ref={ref} />
      </div>
    );
  });

  input.defaultProps = defaultProps;

export default input