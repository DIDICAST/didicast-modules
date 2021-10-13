import { Meta, Story } from "@storybook/react";

import Tooltip, { Props as TooltipProps } from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <Tooltip {...args} ref={undefined} />
);

export const Default = Template.bind({});
Default.args = { content: "Default", maxWidth: 205 };
