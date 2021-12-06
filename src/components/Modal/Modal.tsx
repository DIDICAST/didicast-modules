import { CModal, CModalBody, CModalFooter, CModalHeader } from "@coreui/react";
import { makeStyles, Theme, Grid } from "@material-ui/core";
import { CSSProperties, ReactNode } from "react";
import Button, { Props as ButtonProps } from "../Button/Button";

export type Props = CModal & {
  footer?: ReactNode;
  didicastButtonsInFooter?: ButtonProps[];
  footerStyle?: CSSProperties;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    "& .modal-dialog": {},
    "& .modal-header, .modal-body, .modal-footer": {
      paddingLeft: theme.typography.pxToRem(30),
      paddingRight: theme.typography.pxToRem(30),
    },
    "& .modal-content": {
      borderRadius: theme.typography.pxToRem(6),
    },
    "& .modal-header": {
      paddingTop: theme.typography.pxToRem(30),
      paddingBottom: theme.typography.pxToRem(20),
      borderBottom: "none",
      fontSize: theme.typography.pxToRem(24),
      fontWeight: "bold",
      lineHeight: 1.33,

      "& .header-icon": {
        marginRight: theme.typography.pxToRem(11.5),
        fontSize: theme.typography.pxToRem(28),
        lineHeight: 1.2,
      },
      "html:not([dir='rtl']) & .close": {
        marginTop: theme.typography.pxToRem(-12),
        color: "#c1c0c5",
        opacity: 1,

        "& > svg": {
          width: theme.typography.pxToRem(28),
          height: theme.typography.pxToRem(28),
        },
      },
    },
    "& .modal-body": {
      paddingTop: 0,
      paddingBottom: 0,
      color: "#323237",
      fontSize: theme.typography.pxToRem(20),
      lineHeight: 1.6,
    },
    "& .modal-footer": {
      paddingTop: theme.typography.pxToRem(30),
      paddingBottom: theme.typography.pxToRem(30),
      borderTop: "none",
    },
  },
}));

const Modal = ({
  centered,
  closeOnBackdrop = false,
  className,
  children,
  title,
  footer,
  didicastButtonsInFooter,
  footerStyle,
  ...props
}: Props) => {
  const classes = useStyles();

  return (
    <CModal
      {...props}
      closeOnBackdrop={closeOnBackdrop}
      className={`${classes.container}${className ? ` ${className}` : ""}`}
    >
      <CModalHeader>
        <div className="d-flex align-items-start">{title}</div>
      </CModalHeader>
      <CModalBody>{children}</CModalBody>
      {footer || didicastButtonsInFooter ? (
        <CModalFooter className="flex-nowrap">
          {footer || (
            <Grid container spacing={2} style={footerStyle}>
              {didicastButtonsInFooter!.map((btnProps, idx) => (
                <Grid key={idx} item xs>
                  <Button {...btnProps} />
                </Grid>
              ))}
            </Grid>
          )}
        </CModalFooter>
      ) : null}
    </CModal>
  );
};

export default Modal;
