import { CContainer, CDataTable, CPagination } from "@coreui/react";
import { makeStyles, Theme } from "@material-ui/core";
import { useCallback, useMemo } from "react";

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
      "&:first-child, &:last-child": {
        "& .page-link": {
          padding: "0 8px",
          fontSize: "25px",
          fontWeight: 100,
        },
      },
      "& .page-link": {
        "&:focus": {
          boxShadow: "none",
        },
        lineHeight: "initial",
        fontWeight: 200,
        padding: "8px 8px",
      },
      "&.active .page-link": {
        borderRadius: "50%",
        backgroundColor: "var(--didicast-blue)",
        color: "white",
        width: "32px",
        height: "32px",
        padding: "7px 12px",
        fontWeight: 500,
      },
      "&.disabled": {
        opacity: "0.4",
      },
      "& .page-link, &.disabled .page-link ": {
        border: "unset",
        color: "#000000",
        backgroundColor: "unset",
        borderColor: "unset",
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
  sortingMode?: string;
  fields: any[] | undefined;
  items: any[] | undefined;
  pagination?: any | undefined;
  changePaginations?: Function;
  noItemText?: string;
};

const Table = ({
  fields = [],
  items = [],
  pagination = {
    itemsPerPage: 10,
    activePage: 0,
    sortModel: { column: null, asc: false },
    filterModel: { items: [] },
  },
  changePaginations,
  noItemText = "데이터가 없습니다.",
  sorter = false,
  sorterValue,
  sortingMode,
  onSorterValueChange,
  scopedSlots,
  ...props
}: TableProps) => {
  const classes = useStyles();

  const sortingProps = useMemo(() => {
    if (onSorterValueChange) {
      return {
        onSorterValueChange,
        sorter: sorter && { external: false, resetable: true },
        sorterValue: sorterValue || pagination.sortModel,
        sortingIconSlot: (target: any, next: any) => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className={`${next[0]} ${next[1]} ${next[2]} ${next[3]} ${next[4]} bi bi-arrow-up`}
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
            // <Icons.BsArrowUp
            //   style={{ fontSize: "20px" }}
            //   className={`${next[0]} ${next[1]} ${next[2]} ${next[3]} ${next[4]}`}
            // />
          );
        },
      };
    }
    return {};
  }, [
    onSorterValueChange,
    sorter,
    sorterValue,
    // sortingMode,
    pagination.sortModel,
  ]);

  const onActivePageChange = useCallback(
    (value: any) => {
      if (changePaginations) {
        changePaginations("activePage", value - 1);
      }
    },
    [changePaginations]
  );

  const onPaginationChange = useCallback(
    (pageSize: any) => {
      if (changePaginations) {
        const params = [{ type: "itemsPerPage", payload: pageSize }];
        if (pageSize * (pagination.activePage + 1) > items.length) {
          params.push({
            type: "activePage",
            payload: Math.ceil(items.length / pageSize) - 1,
          });
        }
        changePaginations(params);
      }
    },
    [changePaginations]
  );

  const pageCount = useMemo(() => {
    return Math.ceil(items.length / pagination.itemsPerPage);
  }, [items.length, pagination.itemsPerPage]);

  return (
    <CContainer className={classes.container}>
      <CDataTable
        items={items}
        fields={fields}
        itemsPerPage={pagination.itemsPerPage}
        activePage={pagination.activePage + 1}
        noItemsViewSlot={
          <div className={classes["no-items"]}>
            <span className="pr-2">🤭</span>
            {noItemText}
          </div>
        }
        onPaginationChange={onPaginationChange}
        scopedSlots={scopedSlots}
        {...props}
        {...sortingProps}
      />
      {pagination && pageCount > 0 && (
        <CPagination
          className={`my-3`}
          dots={false}
          arrows={false}
          // doubleArrows={false}
          activePage={pagination.activePage + 1}
          pages={pagination.itemsPerPage ? pageCount : 0}
          onActivePageChange={onActivePageChange}
        />
      )}
    </CContainer>
  );
};

export default Table;
