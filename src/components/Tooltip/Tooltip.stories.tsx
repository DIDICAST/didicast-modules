import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
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
import Tooltip, { TooltipProps } from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `\`Tooltip\` 은 마우스 오버시 부수적인 정보를 제공합니다.

(Storybook canvas controls 변화에 바로 반응하지 않으므로, 변경 후 새로고침 해서 확인해주세요.)`,
      },
      inlineStories: false,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Canvas>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div>
                      <Typography gutterBottom component="div">
                        사용 안내를 위한 툴팁
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Box
                        sx={{
                          width: 300,
                          height: 300,
                          p: 16,
                          border: "1px dashed #d0d0d0",
                        }}
                      >
                        <Tooltip
                          childrenPreset="question-circle"
                          content={
                            <div>
                              <span>마우스를 이동하면 사라집니다.</span>
                            </div>
                          }
                        ></Tooltip>
                      </Box>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div>
                      <Typography gutterBottom component="div">
                        주의 사항 안내를 위한 툴팁
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Box
                        sx={{
                          width: 300,
                          height: 300,
                          p: 16,
                          border: "1px dashed #d0d0d0",
                        }}
                      >
                        <Tooltip
                          childrenPreset="warning-circle"
                          content={
                            <div>
                              편집이 완료되면 <br />
                              최종 확인 페이지의 <br />
                              적용 버튼을 눌러주세요!
                            </div>
                          }
                        ></Tooltip>
                      </Box>
                    </div>
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

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = { content: "Default", maxWidth: 205 };

export const Warning = Template.bind({});
Warning.args = { childrenPreset: "warning-circle", content: "Warning" };
