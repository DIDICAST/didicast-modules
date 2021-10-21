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
      inlineStories: false,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Canvas>
            <div>
              <Typography variant="h6" gutterBottom component="div">
                아래 물음표 위로 마우스를 가져가면 툴팁을 볼 수 있습니다.
              </Typography>
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  p: 16,
                  border: "1px dashed grey",
                }}
              >
                <Tooltip
                  content={
                    <>
                      <div>
                        <span>마우스를 이동하면 사라집니다.</span>
                      </div>
                    </>
                  }
                />
              </Box>
            </div>
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
