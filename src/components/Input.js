import React from "react";

const Input = ({
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  row,
}) => {
  const border = !error ? "def-border" : "error-border";
  const labelColor = error ? "error-text" : "";
  const helperColor = !error ? "def-help-color" : "err-help-color";

  const styledInput = `card__input second ${size ? size : "md"} ${
    fullWidth ? "full-width" : "default-width"
  } ${startIcon ? "pd-left" : null} ${disabled ? "disabled" : border}`;
  const styledTextArea = `card__input second ${
    fullWidth ? "full-width" : "default-width"
  } ${startIcon ? "pd-left" : null} ${disabled ? "disabled" : border}`
  const styledLabel = `card__label third ${labelColor}`;
  const styledText = `first helper-text ${helperColor}`;
  const styledWrapper = `${
    startIcon ? "wrapper-ico" : endIcon ? "wrapper-ico-end" : null
  }`;
  const textHelper = <p className={styledText}>{helperText}</p>;

  if (multiline) {
    return (
      <>
        <textarea
          placeholder="Placeholder"
          className={styledTextArea}
          type="text"
          name="inp"
          value={value}
          rows={row}
        ></textarea>
        <label className={styledLabel} htmlFor="inp">
          Label
        </label>
      </>
    );
  }

  return (
    <>
      <div className={styledWrapper}>
        {startIcon} {endIcon}
      </div>
      <input
        placeholder="Placeholder"
        className={styledInput}
        type="text"
        name="inp"
        value={value}
      />
      <label className={styledLabel} htmlFor="inp">
        Label
      </label>
      {helperText !== "" ? textHelper : null}
    </>
  );
};

export default Input;
