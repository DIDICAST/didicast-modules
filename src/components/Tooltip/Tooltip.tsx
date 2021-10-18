import { ReactNode } from "react";
import { CTooltip } from "@coreui/react";
import { makeStyles, Theme } from "@material-ui/core";

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

export interface TooltipProps {
  content: ReactNode;
  maxWidth?: number;
}

/**
 * Tooltip - 추가적인 정보를 표시합니다.(마우스 오버시)
 *
 * @param {ReactNode} content 보여주고싶은 정보
 * @param {number} maxWidth 툴팁의 최대 가로 길이 기본 값(205)
 *
 * @returns {<CTooltip>} @coreui/react
 */
const Tooltip = ({ content, maxWidth = 205, ...props }: TooltipProps) => {
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
};

export default Tooltip;
