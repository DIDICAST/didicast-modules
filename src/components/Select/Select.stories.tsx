import { Table, TableCell, TableRow } from "@material-ui/core";
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
            <Table>
              <TableRow>
                <TableCell>
                  <Select
                    value={{ value: "cls", label: "클래스" }}
                    options={[
                      { value: "all", label: "전체 보기" },
                      { value: "cls", label: "클래스" },
                      { value: "pkg", label: "패키지" },
                    ]}
                    width={"200px"}
                    margin="8px 5px"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ display: "flex" }}>
                  <Select
                    value={{ value: "all", label: "전체" }}
                    options={[
                      { value: "all", label: "전체" },
                      { value: "ing", label: "수강중" },
                      { value: "before", label: "수강전" },
                      { value: "after", label: "수강완료" },
                    ]}
                  />
                  <Select
                    value={{ value: "10", label: "10명씩" }}
                    options={[
                      { value: "10", label: "10명씩" },
                      { value: "20", label: "20명씩" },
                      { value: "50", label: "50명씩" },
                      { value: "100", label: "100명씩" },
                    ]}
                  />
                </TableCell>
              </TableRow>
            </Table>
          </Canvas>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary />
        </>
      ),
    },
  },
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.storyName = "Default";
Default.args = {
  value: { value: "default1", label: "label1" },
  options: [
    { value: "default1", label: "label1" },
    { value: "default2", label: "label2" },
    { value: "default3", label: "label3" },
  ],
};

export const Width = Template.bind({});
Width.storyName = "Width";
Width.args = {
  width: "200px",
  value: { value: "default1", label: "width1" },
  options: [
    { value: "default1", label: "width1" },
    { value: "default2", label: "width2" },
    { value: "default3", label: "width3" },
  ],
};
