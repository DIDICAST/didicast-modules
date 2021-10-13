import { CTooltip } from "@coreui/react";
import { makeStyles, Theme } from "@material-ui/core";
import { forwardRef } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  qMarkOnCircle: {
    width: theme.typography.pxToRem(20),
    marginLeft: theme.typography.pxToRem(10),
    color: "var(--didicast-white)",
    fontSize: theme.typography.pxToRem(14),
    fontWeight: "bold",
    lineHeight: theme.typography.pxToRem(20),
    alignSelf: "center",
    cursor: "help",

    "& + [data-tippy-root]": {
      "& .tippy-content": {
        maxWidth: "none",
        backgroundColor: "#595959",
      },
      "& .tippy-arrow": {
        color: "#595959",
      },
    },
  },
}));

export type Props = CTooltip & {
  content?: any;
  maxWidth?: number;
};
export type Ref = CTooltip;

const Tooltip = forwardRef<Ref, Props>(
  ({ content, maxWidth = 205, ...props }) => {
    const classes = useStyles();
    return (
      <>
        <CTooltip
          content={content}
          placement="bottom"
          interactive
          advancedOptions={{ maxWidth }}
          {...props}
        >
          <div
            className={`d-inline-block rounded-circle bg-didicast-gray-3 text-center ${classes.qMarkOnCircle}`}
          >
            ?
          </div>
        </CTooltip>
      </>
    );
  }
);

export default Tooltip;
