import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import { makeStyles, Theme } from "@material-ui/core";
import React, { forwardRef, ReactNode, useMemo } from "react";

import { ThemeColorType } from "../../styles/palette";
import { ReactComponent as IconExcel } from "./excel-icon.svg";

export type sizeType = "lg" | "sm" | "xs";
export type Props = CButton & {
  label: ReactNode;
  paddingSize?: sizeType;
  icon?: string | string[];
  IconComponent?: ReactNode;
  img?: string;
  withExcelIcon?: boolean;

  color?: ThemeColorType;
  size?: sizeType;
  ref?: React.Ref<CButton>;
};
export type Ref = CButton;

const sizeDefault = "default";
type sizeTypeWithDefault = {
  [key in
    | sizeType
    // 아래 "default"를 변수 sizeDefault로 바꾸는 방법을 알면 좋겠습니다..
    | "default"]: number;
};
const pixels: {
  [key in keyof sizeTypeWithDefault]: {
    paddingY: number;
    paddingX: sizeTypeWithDefault;
    fontSize: number;
    lineHeight: number;
  };
} = {
  lg: {
    paddingY: 20,
    paddingX: { [sizeDefault]: 63 } as sizeTypeWithDefault,
    fontSize: 20,
    lineHeight: 24,
  },
  [sizeDefault]: {
    paddingY: 13,
    paddingX: {
      lg: 69,
      [sizeDefault]: 28,
      sm: 24,
      xs: 19,
    } as sizeTypeWithDefault,
    fontSize: 18,
    lineHeight: 22,
  },
  sm: {
    paddingY: 8,
    paddingX: { [sizeDefault]: 15 } as sizeTypeWithDefault,
    fontSize: 16,
    lineHeight: 20,
  },
  xs: {
    paddingY: 8,
    paddingX: { lg: 23, [sizeDefault]: 14, sm: 9 } as sizeTypeWithDefault,
    fontSize: 14,
    lineHeight: 16,
  },
};
const getSize: (size?: sizeType) => keyof sizeTypeWithDefault = (size) =>
  size || sizeDefault;

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    padding: ({ size, paddingSize }: Props) =>
      `${theme.typography.pxToRem(
        pixels[getSize(size)].paddingY
      )} ${theme.typography.pxToRem(
        pixels[getSize(size)].paddingX[getSize(paddingSize)] ||
          pixels[getSize(size)].paddingX[sizeDefault]
      )}`,
    paddingTop: ({ size, withExcelIcon }: Props) =>
      !withExcelIcon
        ? undefined
        : theme.typography.pxToRem(pixels[getSize(size)].paddingY * 1.15),
    paddingBottom: ({ size, withExcelIcon }: Props) =>
      !withExcelIcon
        ? undefined
        : theme.typography.pxToRem(pixels[getSize(size)].paddingY * 0.85),
    borderColor: ({ variant }: Props) =>
      !variant ? "transparent !important" : "",
    borderRadius: theme.typography.pxToRem(6),
    boxShadow: `0 ${theme.typography.pxToRem(1)} ${theme.typography.pxToRem(
      2
    )} ${theme.typography.pxToRem(1)} rgba(0, 0, 0, 0.05)`,
    fontSize: ({ size }: Props) =>
      theme.typography.pxToRem(pixels[getSize(size)].fontSize),
    fontWeight: 500,
    lineHeight: ({ size }: Props) =>
      pixels[getSize(size)].lineHeight / pixels[getSize(size)].fontSize,
    "& .c-icon": {
      margin: 0,
    },
    "&.btn-": {
      "&lg": {
        borderRadius: theme.typography.pxToRem(8),
      },
      "&didicast-gray-5, &didicast-red-5": {
        color: "var(--didicast-white)",
      },
      "&outline-didicast-gray-3": {
        borderColor: "#bcbcbc",

        "&:hover": {
          backgroundColor: "#bcbcbc",
        },
      },
    },
    "& img": {
      verticalAlign: "sub",
    },
    "& svg": {
      width: ({ withExcelIcon }: Props) =>
        `${theme.typography.pxToRem(!withExcelIcon ? 20 : 18)} !important`,
      height: ({ withExcelIcon }: Props) =>
        `${theme.typography.pxToRem(!withExcelIcon ? 20 : 24)} !important`,
      minWidth: `${theme.typography.pxToRem(20)} !important`,
      minHeight: `${theme.typography.pxToRem(20)} !important`,
      marginRight: theme.typography.pxToRem(16),

      "&.icon-excel": {
        marginTop: theme.typography.pxToRem(-2),
      },
      "& path": {
        transition: "fill ease .3s",
      },
    },

    "&:hover": {
      "& path": {
        fill: ({ withExcelIcon }: Props) =>
          !withExcelIcon ? undefined : "white !important",
      },
    },
  },
}));

const Button = forwardRef<Ref, Props>(
  (
    {
      className,
      color = "primary",
      size,
      paddingSize,
      icon,
      IconComponent,
      img,
      label,
      variant,
      withExcelIcon,
      ...props
    },
    ref
  ) => {
    const _variant = useMemo(
      () => (!!withExcelIcon ? "outline" : variant),
      [withExcelIcon, variant]
    );
    const classes = useStyles({
      size,
      variant: _variant,
      paddingSize: !paddingSize && !!withExcelIcon ? "xs" : paddingSize,
      withExcelIcon,
    } as Props);

    return (
      <>
        <CButton
          innerRef={ref!}
          className={`d${
            !props.block ? "-inline" : ""
          }-flex justify-content-center align-items-center ${className || ""} ${
            classes.button
          }`}
          color={!!withExcelIcon ? "didicast-deepblue-3" : color}
          size={size}
          variant={_variant}
          {...props}
        >
          {img && <img src={img} className="pr-2" alt="icon" />}
          {icon && <CIcon content={icon} size="xl" className="mr-2" />}
          {!withExcelIcon ? (
            IconComponent
          ) : (
            <IconExcel className="icon-excel mr-2" />
          )}
          {label}
        </CButton>
      </>
    );
  }
);

export default Button;
