import { ChildElement, CTooltip } from "@coreui/react";
import { makeStyles, Theme } from "@material-ui/core";
import { useMemo } from "react";

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

export type TooltipProps = CTooltip & {
  /** 표시 될 내용 */
  content: ChildElement;
  /** 나타나는 툴팁창의 최대 크기 */
  maxWidth?: number;
  childrenPreset?: "question-circle" | "warning-circle";
};

/**  `Tooltip` 은 마우스 오버시 부수적인 정보를 제공합니다.  */
const Tooltip = ({
  content,
  maxWidth,
  childrenPreset,
  children,
  ...props
}: TooltipProps) => {
  const classes = useStyles();

  const _children = useMemo<ChildElement>(() => {
    if (!children) {
      switch (childrenPreset) {
        case "warning-circle":
          return <span>!</span>;

        case "question-circle":
        default:
          return (
            <div
              className={`d-inline-block rounded-circle bg-didicast-gray-3 text-center ${classes.qMarkOnCircle}`}
            >
              ?
            </div>
          );
      }
    } else {
      return children;
    }
  }, [children, childrenPreset, classes.qMarkOnCircle]);

  return (
    <>
      <CTooltip
        content={content}
        placement="bottom"
        interactive
        advancedOptions={{ maxWidth }}
        {...props}
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
