import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";
import { makeStyles, Theme } from "@material-ui/core";
import { ReactNode } from "react";
import * as Icons from "react-icons/bs";

export type Props = CModal & {
  footer?: ReactNode;
  title?: string;
};
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    "& .modal-dialog": {},
    "& .modal-header, .modal-body, .modal-footer": {
      paddingLeft: theme.typography.pxToRem(29),
      paddingRight: theme.typography.pxToRem(27),
    },
    "& .modal-content": {
      borderRadius: theme.typography.pxToRem(12),
    },
    "& .modal-header": {
      paddingTop: theme.typography.pxToRem(28),
      borderBottom: "none",
      fontSize: theme.typography.pxToRem(24),
      fontWeight: "bold",
      lineHeight: 1.67,

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
    "& .modal-footer": {
      paddingBottom: theme.typography.pxToRem(28),
      borderTop: "none",
    },
  },
}));

const Modal = ({
  centered,
  closeOnBackdrop = false,
  className,
  children,
  footer,
  title,
  ...props
}: Props) => {
  const classes = useStyles();

  return (
    <>
      <CModal
        {...props}
        centered={centered}
        closeOnBackdrop={closeOnBackdrop}
        className={`${classes.container}${className ? ` ${className}` : ""}`}
      >
        <CModalHeader className="pb-3">
          <div className="d-flex align-items-start">{title}</div>
        </CModalHeader>
        <CModalBody className="pt-2">{children}</CModalBody>
        {footer && (
          <CModalFooter className="flex-nowrap">{footer}</CModalFooter>
        )}
      </CModal>
    </>
  );
};

export default Modal;
