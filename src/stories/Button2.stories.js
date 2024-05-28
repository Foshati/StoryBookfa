// import React from "react";
// import Button2 from "../components/Button2";

// export default {
//   title: "Example/Button2",
//   component: Button2,
// };

// const Template = (args) => <Button2 {...args} />;

// export const Default = Template.bind({});
// Default.args = {};

import React from "react";
import Button2 from "../components/Button2";

export default {
  title: "Example/Button2",
  component: Button2,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "large"] },
    },
    label: { control: "text" },
  },
};

const Template = (args) => <Button2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  backgroundColor: "#1E90FF", // or any color you prefer
  size: "large",
};
