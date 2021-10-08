import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import { makeStyles, Theme } from "@material-ui/core";
import { forwardRef, ReactNode } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    padding: `${theme.typography.pxToRem(9)} ${theme.typography.pxToRem(15)}`,
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 500,
    lineHeight: 1.56,
    "& .c-icon": {
      margin: 0,
    },
    "&.btn-": {
      "&sm": {
        fontSize: theme.typography.pxToRem(12),
      },
      "&md": {
        fontSize: theme.typography.pxToRem(14),
      },
    },
    "&.btn-lg": {
      padding: `${theme.typography.pxToRem(22)} ${theme.typography.pxToRem(
        60
      )}`,
      fontSize: theme.typography.pxToRem(18),
      lineHeight: 1,
    },
    "& img": {
      verticalAlign: "sub",
    },
    "& svg": {
      width: theme.typography.pxToRem(20),
      height: theme.typography.pxToRem(20),
    },
  },
}));

export type Props = CButton & {
  icon?: string | string[];
  IconComponent?: ReactNode;
  img?: string;
  label: ReactNode;
};
export type Ref = CButton;

const Button = forwardRef<Ref, Props>(
  (
    { className, color = "primary", icon, IconComponent, img, label, ...props },
    ref
  ) => {
    const classes = useStyles();
    return (
      <>
        <CButton
          innerRef={ref!}
          className={`d-flex justify-content-center align-items-center ${
            className || ""
          } ${classes.button}`}
          color={color}
          {...props}
        >
          {img && <img src={img} className="pr-2" alt="icon" />}
          {icon && <CIcon content={icon} size="xl" className="mr-2" />}
          {IconComponent}
          {label}
        </CButton>
      </>
    );
  }
);

export default Button;
