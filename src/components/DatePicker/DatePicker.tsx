import { makeStyles, Theme } from "@material-ui/core";
import { DateTime } from "luxon";
import ReactDatePicker from "react-date-picker";
import { ChangeEvent } from "react";
const useStyles = makeStyles((theme: Theme) => ({
  date: {
    "& .react-date-picker__wrapper": {
      height: theme.spacing(6),
      // paddingTop: theme.spacing(1),
      // paddingLeft: theme.typography.pxToRem(10),
      // paddingRight: theme.typography.pxToRem(10),
      // paddingBottom: theme.spacing(1),
      backgroundColor: ({ backgroundColor, disabled }: Props) =>
        disabled
          ? "#f0f0f0"
          : backgroundColor
          ? "var(--didicast-white)"
          : undefined,
      border: ({ invalid }) =>
        invalid
          ? `solid ${theme.typography.pxToRem(0.6)} var(--didicast-red-3)`
          : `solid ${theme.typography.pxToRem(0.6)} #d0d0d0`,
      borderRadius: theme.typography.pxToRem(4),
      boxShadow: `0 ${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(
        4
      )} ${theme.typography.pxToRem(1)} rgba(0, 0, 0, 0.05)`,
      color: "var(--didicast-gray-3)",
      fontSize: theme.spacing(2),
      flexFlow: "row-reverse",
    },
    "& .react-date-picker__button": {
      outline: "none",
      paddingTop: theme.spacing(1),
      paddingLeft: theme.typography.pxToRem(10),
      paddingBottom: theme.spacing(1),
    },
    "& .react-date-picker__inputGroup": {
      //   minWidth: 0,
      paddingTop: theme.spacing(1),
      paddingRight: theme.typography.pxToRem(10),
      paddingBottom: theme.spacing(1),
    },
    "& .react-date-picker__inputGroup__input": {
      // padding: 0,
      outline: "none",
    },
    "& .react-date-picker--disabled ": {
      // "& .react-date-picker__wrapper": {
      backgroundColor: "#f0f0f0",
      // },
    },
    "& .react-date-picker__calendar": {
      width: "auto",
    },
    "& .react-date-picker__calendar--open": {
      zIndex: theme.zIndex.tooltip + 1,
    },
    "& input": {
      color: "var(--didicast-gray-3)",
    },

    "& .react-calendar": {
      width: theme.typography.pxToRem(280),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      border: `solid ${theme.typography.pxToRem(0.6)} #d0d0d0`,
      borderRadius: theme.typography.pxToRem(4),
      boxShadow: `0 ${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(
        4
      )} ${theme.typography.pxToRem(1)} rgba(0, 0, 0, 0.05)`,
      overflow: "hidden",
      "& *": {
        color: "var(--didicast-gray-3)",
      },
    },
    "& .react-calendar__navigation, .react-calendar__navigation__arrow": {
      marginBottom: 0,
      fontSize: theme.spacing(2),
    },
    "& .react-calendar__month-view__weekdays": {
      fontSize: theme.typography.pxToRem(14),
    },
    "& .react-calendar__tile": {
      "&:enabled, &--active:enabled": {
        "&:hover, :focus": {
          background: "#e6e6e6",
        },
      },
      "&--active, &--hasActive.react-calendar__year-view__months__month": {
        position: "relative",
        background: "none",

        "& abbr": {
          position: "relative",
          zIndex: 2,
        },
        "& .marker": {
          width: "62%",
          height: "62%",
          content: "''",
          left: "19%",
          top: "19%",
          backgroundColor: "var(--didicast-blue-9)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        },
      },
      "&--hasActive": {
        "&.react-calendar__decade-view__years__year, &.react-calendar__century-view__decades__decade":
          {
            backgroundColor: "var(--didicast-blue-9)",
          },
      },
    },
  },
}));

export type Props = {
  date?: Date;
  minDate?: Date;
  disabled?: boolean;
  backgroundColor?: boolean;
  invalid?: boolean;
  onChange?: (value: Date, event: ChangeEvent<HTMLInputElement>) => void;
};

const maxDate = DateTime.fromISO("2999-12-31");
const DatePicker = ({
  date,
  minDate = new Date(),
  onChange,
  disabled,
  backgroundColor = false,
  invalid = false,
}: Props) => {
  const classes = useStyles({ disabled, backgroundColor, invalid } as Props);

  const datePickerProps = {
    // calenderIcon: <>📆</>,
    className: `${classes.date}`,
    clearIcon: null,
    format: "yyyy.M.dd",
    showLeadingZeros: true,
    showNeighboringMonth: false,
  };

  return (
    <>
      <div className="mr-2">
        <ReactDatePicker
          formatDay={(locale, date) => date.getDate().toString()}
          formatYear={(locale, date) => date.getFullYear().toString()}
          minDate={date! < minDate ? date : minDate}
          maxDate={maxDate.toJSDate()}
          onChange={onChange}
          tileContent={({ date, view }) =>
            view === "month" || view === "year" ? (
              <div className={`position-absolute marker rounded-circle`} />
            ) : null
          }
          value={date}
          disabled={disabled}
          calendarIcon={<>📆</>}
          {...datePickerProps}
        />
      </div>
    </>
  );
};

export default DatePicker;
