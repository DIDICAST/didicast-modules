import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@material-ui/core";
import {
  ArgsTable,
  Canvas,
  Description,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta, Story } from "@storybook/react";
import DatePicker, { Props as DatePickerProps } from "./DatePicker";
import { useState } from "react";
export default {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Canvas>
            <Table style={{ marginBottom: "20rem" }}>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" className="m-0">
                      날짜를 입력받기 위한 {`<DatePicker>`}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Template />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Canvas>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary />
        </>
      ),
    },
  },
} as Meta;

const Template: Story<DatePickerProps> = ({ date, onChange, ...args }) => {
  const [dateVal, setDateVal] = useState(new Date());
  const day = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  return (
    <>
      <Box display="flex" alignItems="center">
        <DatePicker date={dateVal} onChange={setDateVal} {...args} />
        <div className="ml-2 text-didicast-blue">
          <span className="text-didicast-gray-0">선택된 날짜: </span>
          {`${dateVal.getFullYear()}년 ${
            dateVal.getMonth() + 1
          }월 ${dateVal.getDate()}일 ${day[dateVal.getDay()]}`}
        </div>
      </Box>
    </>
  );
};

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div style={{ paddingBottom: "20rem" }}>
      <Story />
    </div>
  ),
];
