import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  Checkbox,
  TableProps,
  Table as TableCoreui,
  TableBody,
  TableCell,
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
import Table from "./Table";

const fields = [
  { key: "checkbox", label: " ", _style: { width: "3%" }, sorter: false },
  {
    key: "name",
    label: "멤버 이름",
    _style: { width: "10%", maxWidth: "130px" },
  },
  {
    key: "email",
    label: "이메일",
    _style: { width: "22%", maxWidth: "250px" },
    sorter: false,
  },
  {
    key: "phone_num",
    label: "연락처",
    _style: { width: "15%" },
    sorter: false,
  },
  { key: "org_nm", label: "회사", _style: { width: "11%", maxWidth: "180px" } },
  {
    key: "dept_nm",
    label: "부서",
    _style: { width: "11%", maxWidth: "150px" },
  },
  { key: "pst_nm", label: "직책", _style: { width: "10%" } },
  {
    key: "mbr_type",
    label: "멤버 등급",
    _style: { width: "9%" },
    sorter: false,
  },
  { key: "more", label: "관리", _style: { width: "6%" }, sorter: false },
];
const items = [
  {
    mbr_no: "2671",
    user_no: "3137",
    username: "나루미",
    name: "나루미",
    email: "lumi@didicast.com",
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
    email: "lumi@didicast.com",
    phone_num: "01012341234",
    org_nm: "산타",
    pst_nm: "개발",
    dept_nm: "FE",
    mbr_type: "정회원",
  },
];
const scopedFields = [
  { key: "checkbox", label: " ", _style: { width: "3%" }, sorter: false },
  {
    key: "name",
    label: "멤버 이름",
    _style: { width: "10%", maxWidth: "130px" },
  },
  {
    key: "email",
    label: "이메일",
    _style: { width: "22%", maxWidth: "250px" },
    sorter: false,
  },
  {
    key: "phone_num",
    label: "연락처",
    _style: { width: "15%" },
    sorter: false,
  },
  { key: "org_nm", label: "회사", _style: { width: "11%", maxWidth: "180px" } },
  {
    key: "dept_nm",
    label: "부서",
    _style: { width: "11%", maxWidth: "150px" },
  },
  { key: "pst_nm", label: "직책", _style: { width: "10%" } },
];
const originFields = [
  {
    key: "name",
    label: "멤버 이름",
    _style: { width: "10%", maxWidth: "130px" },
  },
  {
    key: "email",
    label: "이메일",
    _style: { width: "22%", maxWidth: "250px" },
    sorter: false,
  },
  {
    key: "phone_num",
    label: "연락처",
    _style: { width: "15%" },
    sorter: false,
  },
  { key: "org_nm", label: "회사", _style: { width: "11%", maxWidth: "180px" } },
  {
    key: "dept_nm",
    label: "부서",
    _style: { width: "11%", maxWidth: "150px" },
  },
  { key: "pst_nm", label: "직책", _style: { width: "10%" } },
  {
    key: "mbr_type",
    label: "멤버 등급",
    _style: { width: "9%" },
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
                  <TableCell>
                    <Table
                      items={items}
                      fields={fields}
                      columnHeaderSlot={{
                        checkbox: [<Checkbox key="member-list" />],
                      }}
                      scopedSlots={{
                        checkbox: ({ item, index }: any) => (
                          <td>
                            <Checkbox
                              key={index}
                              // className={formClasses.checkbox}
                              // checked={item.checked === true}
                              // onChange={handleChecked(item.user_no)}
                            />
                            {console.log("item,", items)}
                          </td>
                        ),
                        more: ({ item, index }: any) => (
                          <td>
                            <CDropdown key={index}>
                              <CDropdownToggle caret={false}>@</CDropdownToggle>
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
                  </TableCell>
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
};

export const NoItems = Template.bind({});
NoItems.args = {
  fields: fields,
  items: [],
  noItemText: "멤버가 없습니다.",
};

export const AddScoped = Template.bind({});
AddScoped.args = {
  fields: scopedFields,
  items: items,
  columnHeaderSlot: {
    checkbox: [<Checkbox key="member-list" />],
  },
  scopedSlots: {
    checkbox: ({ item, index }: any) => (
      <td>
        <Checkbox
          key={index}
          // className={formClasses.checkbox}
          // checked={item.checked === true}
          // onChange={handleChecked(item.user_no)}
        />
        {console.log("item,", items)}
      </td>
    ),
  },
};
