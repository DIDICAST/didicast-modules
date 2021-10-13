import {Meta, Story} from '@storybook/react';

import Button, {Props as ButtonProps} from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => (
  <Button {...args} ref={undefined} />
);

export const Default = Template.bind({});
Default.args = {label: 'Default', color: 'primary'};

export const DefaultWithIconComponent = Template.bind({});
DefaultWithIconComponent.storyName = 'Default with IconComponent';
DefaultWithIconComponent.args = {
  label: 'Default with icon',
  color: 'primary',
  IconComponent: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-plus-lg d-block mr-3"
      viewBox="0 0 16 16">
      <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
    </svg>
  ),
};
