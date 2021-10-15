import Tooltip from "./Tooltip";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [withKnobs],
};

export const tooltip = () => {
  const content = text("content", "Default");
  const maxWidth = number("maxWidth", 205);

  return <Tooltip content={content} maxWidth={maxWidth}></Tooltip>;
};

tooltip.story = {
  name: "Default",
};
