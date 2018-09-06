import React from 'react'

export const Input = (props) => {
  const { label, input, type, meta } = props
  return (
    <div className="form-item">
      <label>{label}</label>
      <div className="form-control">
        <input {...input} type={type} />
        {meta.error &&
          meta.touched &&
          !meta.active && (
            <div className="form-control-error">{meta.error}</div>
          )}
      </div>
    </div>
  )
}
