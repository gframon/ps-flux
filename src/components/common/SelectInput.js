import React from "react";

function SelectInput(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.id || ""}
          className="form-control"
        >
          {props.options.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
      {props.errors && <div className="alert alert-danger">{props.errors}</div>}
    </div>
  );
}

SelectInput.defaultProps = {
  error: "",
};

export default SelectInput;
