import { CModal, CModalBody, CModalFooter, CModalHeader } from "@coreui/react";
import { makeStyles, Theme, Grid } from "@material-ui/core";
import { ReactNode, useMemo } from "react";
import Button from "../Button/Button";
import { useState, useCallback } from "react";

// export type footerButton = "double" | "single"
export type Props = CModal & {
  footer?: ReactNode;
  title?: string;
  footerTypeWithButton?: "double" | "single";
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
      paddingBottom: theme.typography.pxToRem(22),
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
  footerTypeWithButton,
  children,
  footer,
  title,
  ...props
}: Props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);
  const _footer = useMemo<ReactNode>(() => {
    if (footerTypeWithButton) {
      switch (footerTypeWithButton) {
        case "double":
          return (
            <Grid container spacing={2}>
              <Grid item xs>
                <Button
                  label="취소"
                  color="didicast-gray-5"
                  block
                  onClick={handleOpen}
                />
              </Grid>
              <Grid item xs>
                <Button label="확인" block onClick={handleOpen} />
              </Grid>
            </Grid>
          );

        case "single":
        default:
          return (
            <Grid container spacing={2}>
              <Grid item xs>
                <Button label="확인" block onClick={handleOpen} />
              </Grid>
            </Grid>
          );
      }
    } else {
      return footer;
    }
  }, [footer, footerTypeWithButton, handleOpen]);

  return (
    <>
      <Button
        label="Default Dialog"
        onClick={handleOpen}
        paddingSize="lg"
        variant="outline"
      />
      <CModal
        show={open}
        {...props}
        closeOnBackdrop={closeOnBackdrop}
        className={`${classes.container}${className ? ` ${className}` : ""}`}
      >
        <CModalHeader>
          <div className="d-flex align-items-start">{title}</div>
        </CModalHeader>
        <CModalBody>{children}</CModalBody>
        {!footer && (
          <CModalFooter className="flex-nowrap">{_footer}</CModalFooter>
        )}
      </CModal>
    </>
  );
};

export default Modal;
