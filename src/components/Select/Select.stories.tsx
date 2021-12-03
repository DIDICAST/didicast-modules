import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@material-ui/core";
import {
  Subtitle,
  Title,
  Description,
  Canvas,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react";
import { AutoClose } from "../Modal/Modal.stories";
import Select, { SelectProps } from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Canvas>
            <Table style={{ marginBottom: "10rem" }}>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>스튜디오</TableCell>
                  <TableCell>디디캐스트</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <ul className="list-unstyled mb-0 d-flex">
                      <li>
                        <Select
                          width="120px"
                          defaultValue={{ value: "all", label: "전체" }}
                          // value={{ value: "all", label: "전체" }}
                          options={[
                            { value: "all", label: "전체" },
                            { value: "ing", label: "수강중" },
                            { value: "before", label: "수강전" },
                            { value: "after", label: "수강완료" },
                          ]}
                        />
                      </li>
                      <li>
                        <Select
                          width="120px"
                          defaultValue={{ value: "10", label: "10명씩" }}
                          // value={{ value: "10", label: "10명씩" }}
                          options={[
                            { value: "10", label: "10명씩" },
                            { value: "20", label: "20명씩" },
                            { value: "50", label: "50명씩" },
                            { value: "100", label: "100명씩" },
                          ]}
                        />
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Select
                      className={`d-inline-flex flex-column`}
                      defaultValue={{ value: "all", label: "전체 보기" }}
                      // value={{ value: "all", label: "전체 보기" }}
                      options={[
                        { value: "all", label: "전체 보기" },
                        { value: "cls", label: "클래스" },
                        {
                          value: "pkg",
                          label: "very very long label",
                        },
                      ]}
                    />
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

const Template: Story<SelectProps> = (args) => (
  <div style={{ paddingBottom: "10rem" }}>
    <Select {...args} />
  </div>
);

export const Default = Template.bind({});
Default.storyName = "Default";
Default.args = {
  defaultValue: { value: "default1", label: "label1" },
  options: [
    { value: "default1", label: "label1" },
    { value: "default2", label: "label2" },
    { value: "default3", label: "label3" },
  ],
};

export const W120 = Template.bind({});
W120.storyName = "studioSelect";
W120.args = {
  width: "120px",
  defaultValue: { value: "default1", label: "label1" },
  options: [
    { value: "default1", label: "label1" },
    { value: "default2", label: "label2" },
    { value: "default3", label: "label3" },
  ],
};

export const Wauto = Template.bind({});
Wauto.storyName = "didicastSelect";
Wauto.args = {
  width: "auto",
  className: "d-inline-flex flex-column",
  defaultValue: { value: "default1", label: "label1" },
  options: [
    { value: "default1", label: "label1" },
    { value: "default2", label: "label_width_auto" },
    { value: "default3", label: "label3" },
  ],
};
