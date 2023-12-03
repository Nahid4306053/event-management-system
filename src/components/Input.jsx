import React from "react";

export default function Input({label,type,placeholder,customcss}) {
  return (

      <div className="form-control">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={` ${customcss} input input-bordered  `}
          required
        />
      </div>
  
  
  );
}
