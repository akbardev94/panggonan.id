import React, { useRef } from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function File(props) {
  const {
    value,
    placeholder,
    name,
    accept,
    prepend,
    append,
    outerClassname,
    inputClassname,
  } = props;

   const refInputFile = useRef(null);

  return (
    <div className={["input-text mb-3", outerClassname].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          value={value}
          onChange={props.onChange}
        />
        <input 
            onClick={() => refInputFile.current.click()}
            defaultValue={value}
            placeholder={placeholder}
            className={["form-control", inputClassname].join(" ")}
        />
        {append && (
          <div classname="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

Text.defaultProps = {
  placeholder: "Browse a file..."
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassname: propTypes.string,
  inputClassname: propTypes.string,
};
