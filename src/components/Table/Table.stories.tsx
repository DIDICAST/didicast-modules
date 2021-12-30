import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  Checkbox,
  Table as TableCoreui,
  TableHead,
  TableRow,
} from "@material-ui/core";
import {
  Canvas,
  Description,
  Subtitle,
  Title,
  PRIMARY_STORY,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react";
import { useState, useCallback } from "react";
import Table, { TableProps } from "./Table";

const fields = [
  { key: "checkbox", label: " ", sorter: false },
  {
    key: "name",
    label: "멤버 이름",
  },
  {
    key: "email",
    label: "이메일",
    sorter: false,
  },
  {
    key: "phone_num",
    label: "연락처",
    sorter: false,
  },
  {
    key: "org_nm",
    label: "회사",
    // _style: { width: "11%", maxWidth: "180px" }
  },
  {
    key: "dept_nm",
    label: "부서",
  },
  { key: "pst_nm", label: "직책" },
  { key: "more", label: "관리", sorter: false },
];
const moreItems = [
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미1",
    name: "나루미1",
    email: "lumi1@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미2",
    name: "나루미2",
    email: "lumi2@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미3",
    name: "나루미",
    email: "lumi3@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미",
    email: "lumi4@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미",
    email: "lumi5@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미",
    email: "lumi6@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미",
    email: "lumi7@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미",
    email: "lumi8@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미",
    email: "lumi9@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미",
    email: "lumi10@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미",
    email: "lumi11@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미",
    email: "lumi12@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미",
    email: "lumi13@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
];
const items = [
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미3",
    name: "나루미3",
    email: "lumi1@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타1",
    pst_nm: "개발1",
    dept_nm: "FE1",
    mbr_type: "정회원",
    checked: false,
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미2",
    name: "나루미2",
    email: "lumi2@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타2",
    pst_nm: "개발2",
    dept_nm: "FE2",
    mbr_type: "정회원",
    checked: false,
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미8",
    email: "lumi3@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타3",
    pst_nm: "개발3",
    dept_nm: "FE3",
    mbr_type: "정회원",
    checked: false,
  },
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미1",
    name: "나루미1",
    email: "lumi4@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타4",
    pst_nm: "개발4",
    dept_nm: "FE4",
    mbr_type: "정회원",
    checked: false,
  },
];
const originFields = [
  {
    key: "name",
    label: "멤버 이름",
    // _style: { width: "10%", maxWidth: "130px" },
  },
  {
    key: "email",
    label: "이메일",
    sorter: false,
  },
  {
    key: "phone_num",
    label: "연락처",
    sorter: false,
  },
  { key: "org_nm", label: "회사" },
  {
    key: "dept_nm",
    label: "부서",
  },
  { key: "pst_nm", label: "직책" },
  {
    key: "mbr_type",
    label: "멤버 등급",
    sorter: false,
  },
];

export default {
  title: "Components/Table",
  component: Table,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Canvas>
            <TableCoreui>
              <TableHead>
                <TableRow>
                  <Table
                    items={items}
                    total={items.length}
                    fields={originFields}
                    scopedSlots={{
                      more: ({ item, index }: any) => (
                        <td>
                          <CDropdown key={index}>
                            <CDropdownToggle caret={false}>
                              click!
                            </CDropdownToggle>
                            <CDropdownMenu>
                              {/* <CDropdownItem>{item[index].username}</CDropdownItem> */}

                              <CDropdownItem>리스트2</CDropdownItem>

                              <CDropdownItem>리스트3</CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>
                        </td>
                      ),
                    }}
                  />
                </TableRow>
              </TableHead>
            </TableCoreui>
          </Canvas>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary />
        </>
      ),
    },
  },
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  fields: originFields,
  items: items,
  total: items.length,
};

const Scoped: Story<TableProps> = () => {
  const [scItem, setScItem] = useState([
    {
      mbr_no: "2671",
      user_no: "3137",
      username: "나루미1",
      name: "나루미1",
      email: "lumi1@didicast.com",
      phone_num: "01012341234",
      org_nm: "산타",
      pst_nm: "개발",
      dept_nm: "FE",
      mbr_type: "정회원",
      checked: false,
    },
    {
      mbr_no: "2671",
      user_no: "3137",
      username: "나루미2",
      name: "나루미2",
      email: "lumi2@didicast.com",
      phone_num: "01012341234",
      org_nm: "산타",
      pst_nm: "개발",
      dept_nm: "FE",
      mbr_type: "정회원",
      checked: false,
    },
    {
      mbr_no: "2671",
      user_no: "3137",
      username: "나루미3",
      name: "나루미3",
      email: "lumi3@didicast.com",
      phone_num: "01012341234",
      org_nm: "산타",
      pst_nm: "개발",
      dept_nm: "FE",
      mbr_type: "정회원",
      checked: false,
    },
    {
      mbr_no: "2671",
      user_no: "3137",
      username: "나루미4",
      name: "나루미4",
      email: "lumi4@didicast.com",
      phone_num: "01012341234",
      org_nm: "산타",
      pst_nm: "개발",
      dept_nm: "FE",
      mbr_type: "정회원",
      checked: false,
    },
  ]);
  const fields_sc = [
    { key: "checkbox", label: " ", sorter: false },
    {
      key: "name",
      label: "멤버 이름",
    },
    {
      key: "email",
      label: "이메일",
      sorter: false,
    },
    {
      key: "phone_num",
      label: "연락처",
      sorter: false,
    },
    {
      key: "org_nm",
      label: "회사",
      // _style: { width: "11%", maxWidth: "180px" }
    },
    {
      key: "dept_nm",
      label: "부서",
    },
    { key: "pst_nm", label: "직책" },
    { key: "more", label: "", sorter: false },
  ];

  return (
    <>
      <Table
        items={scItem}
        total={scItem.length}
        fields={fields_sc}
        columnHeaderSlot={{
          checkbox: [
            <Checkbox
              key="member-list"
              style={{ color: "#06b0d7" }}
              onChange={(e) => {
                const result = scItem.map((item) => {
                  item.checked = e.target.checked;
                  return item;
                });
                setScItem(result);
              }}
            />,
          ],
        }}
        scopedSlots={{
          checkbox: (item: any, index: any) => (
            <td>
              <Checkbox
                key={index}
                style={{ color: "#06b0d7" }}
                checked={item.checked === true}
                onChange={(e) => {
                  const result = scItem.map((target) => {
                    if (item.username === target.username) {
                      target.checked = e.target.checked;
                    }
                    return target;
                  });
                  setScItem(result);
                }}
              />
            </td>
          ),
          more: ({ item, index }: any) => (
            <td>
              <CDropdown key={index}>
                <CDropdownToggle caret={false}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    // style={{ color: "#06b0d7" }}
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>리스트2</CDropdownItem>
                  <CDropdownItem>리스트3</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </td>
          ),
        }}
      />
    </>
  );
};
export const AddScoped = Scoped.bind({});

const Sorters: Story<TableProps> = () => {
  const [pagination, setPagination] = useState({
    itemsPerPage: 5,
    activePage: 0,
    sortModel: { column: null, asc: false },
    filterModel: { items: [] },
  });
  const changePaginations = useCallback(
    (typeOrParams, payload) => {
      if (!pagination.itemsPerPage) {
        return;
      }
      switch (typeOrParams) {
        case "itemsPerPage":
          setPagination((prev) => ({ ...prev, itemsPerPage: payload }));
          break;
        case "activePage":
          setPagination((prev) => ({ ...prev, activePage: payload }));
          break;
        case "sorter":
          setPagination((prev) => ({ ...prev, sorter: payload }));

          break;
        case "filter":
          setPagination((prev) => ({ ...prev, filter: payload }));
          break;
      }
    },
    [setPagination, pagination.itemsPerPage]
  );
  const onSorterValueChange = useCallback(
    (target) => {
      // console.log({ target });
      changePaginations("sorter", target);
    },
    [changePaginations]
  );
  return (
    <>
      <Table
        sorter={true}
        items={items}
        total={items.length}
        fields={originFields}
        pagination={pagination}
        changePaginations={changePaginations}
        onSorterValueChange={onSorterValueChange}
      />
    </>
  );
};
export const Sorter = Sorters.bind({});

const PaginationTemplate: Story<TableProps> = () => {
  const [pagination, setPagination] = useState({
    itemsPerPage: 5,
    activePage: 0,
    sortModel: { column: null, asc: false },
    filterModel: { items: [] },
  });

  const changePaginations = useCallback(
    (typeOrParams, payload) => {
      if (!pagination.itemsPerPage) {
        return;
      }
      switch (typeOrParams) {
        case "itemsPerPage":
          setPagination((prev) => ({ ...prev, itemsPerPage: payload }));
          break;
        case "activePage":
          setPagination((prev) => ({ ...prev, activePage: payload }));
          break;
        case "sorter":
          setPagination((prev) => ({ ...prev, sorter: payload }));

          break;
        case "filter":
          setPagination((prev) => ({ ...prev, filter: payload }));
          break;
      }
    },
    [setPagination, pagination.itemsPerPage]
  );

  return (
    <>
      <Table
        items={moreItems}
        total={moreItems.length}
        fields={originFields}
        pagination={pagination}
        changePaginations={changePaginations}
      />
    </>
  );
};
export const Pagination = PaginationTemplate.bind({});

export const NoItems = Template.bind({});
NoItems.args = {
  fields: fields,
  items: [],
  noItemText: "멤버가 없습니다.",
};
