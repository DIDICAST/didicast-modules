import { CButton, CFormText, CInput, CInvalidFeedback } from "@coreui/react";
import { makeStyles } from "@material-ui/core";
import { forwardRef, useState } from "react";

const getEyeIcon = (visible) => {
  return `data:image/svg+xml;base64,${Buffer.from(
    visible
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
<path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
<path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
</svg>`
  ).toString("base64")}`;
};
const pxHeight = 48;

const useStyles = makeStyles((theme) => ({
  input: {
    height: theme.typography.pxToRem(pxHeight),
    borderWidth: theme.typography.pxToRem(0.6),
    fontSize: theme.typography.pxToRem(16),
    "&:placeholder": {
      color: "var(--didicast-gray-3)",
    },
    "&, &:focus, .was-validated .form-control&:invalid:focus, .form-control.is-invalid&:focus":
      {
        boxShadow: `0 ${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(
          4
        )} ${theme.typography.pxToRem(1)} rgba(0, 0, 0, 0.05)`,
      },

    backgroundRepeat: "no-repeat",
    backgroundSize: "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
    "html:not([dir=rtl]) &": {
      backgroundPosition: "right calc(0.375em + 0.1875rem) center",
    },
  },
  password: {
    width: theme.typography.pxToRem(36),
    height: theme.typography.pxToRem(pxHeight),
    top: 0,
    right: 0,

    "&:focus": {
      boxShadow: "none",
    },
  },
}));

export type Props = {};

const Input = forwardRef(
  (
    {
      type = "text",
      name,
      handleBlur,
      handleChange,
      values,
      errors,
      touched,
      helpText,
      component,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const classes = useStyles();
    const Component = component || CInput;
    const [isShownPassword, toggleShownPassword] = useState(
      type === "password" ? false : null
    );

    return (
      <>
        <div className={`position-relative`}>
          <Component
            type={isShownPassword === true ? "text" : type}
            innerRef={ref}
            id={`form-${name}`}
            name={name}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values[name]}
            invalid={errors[name] && touched[name]}
            className={`${classes.input}${className ? ` ${className}` : ""}`}
            custom="true"
            style={{
              ...(style || {}),
              ...(isShownPassword === null
                ? {}
                : {
                    backgroundImage: `url(${`${getEyeIcon(isShownPassword)}`})`,
                  }),
            }}
            {...props}
          >
            {children}
          </Component>
          {errors[name] && touched[name] ? (
            <CInvalidFeedback>{errors[name]}</CInvalidFeedback>
          ) : (
            helpText && <CFormText className="help-block">{helpText}</CFormText>
          )}
          {isShownPassword !== null && (
            <CButton
              onClick={() => toggleShownPassword((prev) => !prev)}
              className={`position-absolute ${classes.password}`}
            />
          )}
        </div>
      </>
    );
  }
);

export default Input;
