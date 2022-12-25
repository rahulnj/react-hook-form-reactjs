import React from 'react'
import { uniqueId } from 'loadash'
import input from '../input'

const defaultProps = {
  className: undefined,
  label: undefined,
  tip: undefined,
  error: undefined,
  name: undefined,
}

const generateField = (FormComponent) => {
  const FieldComponent = ({
    className,
    label,
    tip,
    error,
    name,
    ...otherProps
  }) => {
    const fieldId = uniqueId('form-field-')

    return (
      <div
        className={className}
        hasLabel={!!label}
        data-testid={name ? `form-field:${name}` : 'form-field'}
      >
        {label && <label htmlFor={fieldId}>{label}</label>}
        <FormComponent
          id={fieldId}
          invalid={!!error}
          name={name}
          {...otherProps}
        />
        {tip && <span>{tip}</span>}
        {error && <span>{error}</span>}
      </div>
    )
  }

  FieldComponent.defaultProps = defaultProps

  return FieldComponent
}

export default {Input: generateField(input)}
