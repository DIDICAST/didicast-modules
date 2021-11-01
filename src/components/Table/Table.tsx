import { CContainer, CDataTable, CPagination } from "@coreui/react";
import { makeStyles, Theme } from "@material-ui/core";
import { useMemo } from "@storybook/addons";
import { forwardRef } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    "& .CDataTable_arrow-position__3dQ_L": {
      right: "unset",
    },
    "& .d-inline": {
      paddingRight: theme.typography.pxToRem(4),
    },
    "& .table-responsive": {
      boxShadow: `0 ${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(
        4
      )} ${theme.typography.pxToRem(2)} rgba(0, 0, 0, 0.05)`,
      borderRadius: theme.typography.pxToRem(6),
      overflow: "initial",
    },
    "& .table": {
      fontSize: theme.typography.pxToRem(16),
      backgroundColor: "var(--didicast-white)",
      borderRadius: theme.typography.pxToRem(6),
      marginBottom: 0,
      "& thead tr": {
        backgroundColor: "var(--didicast-deepblue-3)",
        color: "white",
        height: theme.typography.pxToRem(60),
        borderRadius: theme.typography.pxToRem(6),
        "& th": {
          height: theme.typography.pxToRem(64),
          borderBottomColor: "unset",
          border: "none",
          fontWeight: "normal",
          "&:first-child": {
            borderRadius: `${theme.typography.pxToRem(6)} 0 0 0`,
          },
          "&:last-child": {
            borderRadius: `0 ${theme.typography.pxToRem(6)} 0 0`,
          },
        },
      },
      "& tbody": {
        // borderLeft: "solid 20px white",
        // borderRight: "solid 20px white",
        "& td": {
          height: theme.typography.pxToRem(62),
          verticalAlign: "middle",
          wordBreak: "break-all",
        },
      },
    },
    "& ul": {
      justifyContent: "center !important",
      fontSize: theme.typography.pxToRem(16),
    },
    "& .page-item": {
      "&.active .page-link": {
        borderRadius: "50%",
        backgroundColor: "var(--didicast-blue)",
        color: "white",
      },
      "& .page-link, &.disabled .page-link ": {
        border: "unset",
        color: "#000000",
        backgroundColor: "unset",
        borderColor: "unset",
        fontWeight: 100,
      },
    },
  },
  "no-items": {
    color: "#8b8b8b",
    fontSize: theme.typography.pxToRem(22),
    textAlign: "center",
    padding: "30px 0",
  },
}));

export type TableProps = CDataTable & {
  noItemText?: string;
  pagination: object;
  sortingMode?: string;
};

const Table = ({
  noItemText = "데이터가 없습니다.",
  fields = [],
  items = [],
  pagination,
  sorter,
  sorterValue,
  sortingMode,
  onSorterValueChange,
  scopedSlots,
  ...props
}: TableProps) => {
  const classes = useStyles();

  // const sortingProps = useMemo(() => {
  //   if (onSorterValueChange) {
  //     const additionalProps = { scopedSlots };

  //     if (sortingMode !== "client") {
  //       const keys = fields.reduce((acc, cur) => {
  //         if (cur.sorter !== false) {
  //           acc.push(cur.key);
  //         }
  //         return acc;
  //       }, []);
  //       additionalProps.scopedSlots = {
  //         ...scopedSlots,
  //         ...keys.reduce((acc, cur) => {
  //           if (scopedSlots[cur] === undefined) {
  //             acc[cur] = (item, index) => (
  //               <td key={index}>{item[`${cur}ForSorter`]}</td>
  //             );
  //           }
  //           return acc;
  //         }, {}),
  //       };
  //       additionalProps.items = items.list.map((item) => ({
  //         ...item,
  //         ...keys.reduce((acc, cur) => {
  //           acc[`${cur}ForSorter`] = item[cur];
  //           acc[cur] = "";
  //           return acc;
  //         }, {}),
  //       }));
  //     }
  // };

  return (
    <CContainer className={classes.container}>
      <CDataTable
        items={items}
        fields={fields}
        scopedSlots={scopedSlots}
        noItemsViewSlot={
          <div className={classes["no-items"]}>
            <span className="pr-2">🤭</span>
            {noItemText}
          </div>
        }
        {...props}
      ></CDataTable>
      {/* <CPagination/> */}
    </CContainer>
  );
};

export default Table;
