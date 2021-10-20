import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import { makeStyles, Theme } from "@material-ui/core";
import { forwardRef, ReactNode } from "react";
import { ThemeColorType } from "../../styles/palette";

export type sizeType = "lg" | "sm" | "xs";
export type Props = CButton & {
  paddingSize?: sizeType;
  icon?: string | string[];
  IconComponent?: ReactNode;
  img?: string;
  label: ReactNode;
  color?: ThemeColorType;
  size?: sizeType;
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
      minWidth: theme.typography.pxToRem(20),
      minHeight: theme.typography.pxToRem(20),
      marginRight: theme.typography.pxToRem(16),
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
      ...props
    },
    ref
  ) => {
    const classes = useStyles({ size, variant, paddingSize } as Props);

    return (
      <>
        <CButton
          innerRef={ref!}
          className={`d-flex justify-content-center align-items-center ${
            className || ""
          } ${classes.button}`}
          color={color}
          size={size}
          variant={variant}
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
