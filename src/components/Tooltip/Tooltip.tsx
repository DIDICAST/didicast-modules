import { ChildElement, CTooltip } from "@coreui/react";
import { makeStyles, Theme } from "@material-ui/core";
import { useMemo } from "react";
import { ReactComponent as IconwarnMark } from "./ic-warnMark.svg";
import { ReactComponent as IconQMark } from "./ic-question-circle.svg";

const useStyles = makeStyles((theme: Theme) => ({
  qMarkOnCircle: {
    marginLeft: theme.typography.pxToRem(10),
    "& svg": {
      width: theme.typography.pxToRem(20),
      height: theme.typography.pxToRem(20),
      marginBottom: theme.typography.pxToRem(3),
    },

    "& + [data-tippy-root]": {
      "& .tippy-content": {
        maxWidth: "none",
        backgroundColor: "#595959",
      },
      "& .tippy-arrow": {
        color: "#595959",
      },
      "& .font-weight-bold": {
        fontWeight: "normal !important",
      },
    },
  },
  warnMark: {
    marginLeft: theme.typography.pxToRem(10),
    "& svg": {
      width: theme.typography.pxToRem(20),
      height: theme.typography.pxToRem(20),
      marginBottom: theme.typography.pxToRem(3),
    },
    "& + [data-tippy-root]": {
      "& .tippy-content": {
        maxWidth: "none",
        backgroundColor: "var(--didicast-blue)",
      },
      "& .tippy-arrow": {
        color: "var(--didicast-blue)",
      },
    },
  },
}));

export type TooltipProps = CTooltip & {
  /** 표시 될 내용 */
  content: ChildElement;
  /** 나타나는 툴팁창의 최대 너비 */
  maxWidth?: number;
  /** 흔히 쓰는 children을 내장해놓고 활용합니다. */
  childrenPreset?: "question-circle" | "warning-circle";
};

/**
 * `Tooltip` 은 마우스 오버시 부수적인 정보를 제공합니다.
 */
const Tooltip = ({
  maxWidth,
  placement = "bottom",
  interactive = true,
  childrenPreset = "question-circle",
  children,
  ...props
}: TooltipProps) => {
  const classes = useStyles();

  const _children = useMemo<ChildElement>(() => {
    if (!children) {
      switch (childrenPreset) {
        case "question-circle":
          return (
            <div
              className={`d-inline-block rounded-circle text-center ${classes.qMarkOnCircle}`}
            >
              <IconQMark />
            </div>
          );

        case "warning-circle":
          return (
            <span
              className={`d-inline-block rounded-circle text-center ${classes.warnMark}`}
            >
              <IconwarnMark />
            </span>
          );

        default:
          return <div></div>;
      }
    } else {
      return children;
    }
  }, [children, childrenPreset, classes.qMarkOnCircle, classes.warnMark]);

  return (
    <>
      <CTooltip
        {...props}
        placement={placement}
        interactive={interactive}
        advancedOptions={{ maxWidth }}
      >
        {_children}
      </CTooltip>
    </>
  );
};

Tooltip.defaultProps = {
  maxWidth: 205,
};

export default Tooltip;
