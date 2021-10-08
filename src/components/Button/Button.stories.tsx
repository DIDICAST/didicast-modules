import { Meta, Story } from "@storybook/react";

import Button, { Props as ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} ref={undefined} />
);

export const Basic = Template.bind({});

// Basic.storyName = "I am the basic";
Basic.args = { label: "Basic button", color: "secondary" };
