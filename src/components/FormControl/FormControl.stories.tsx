import {
  ArgsTable,
  // Canvas,
  Description,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react";
import { useFormik } from "formik";

import FormControl, {
  components,
  Props as FormControlProps,
} from "./FormControl";

export default {
  title: "Components/FormControl",
  component: FormControl,
  argTypes: {
    name: {
      type: { name: "string", required: true },
      description: `The name of this form control`,
    },
    componentType: {
      options: components,
      control: { type: "select" },
    },
    handleBlur: {
      type: { name: "function", required: true },
      description: `(*formik에서 반드시 넘겨받아야할 prop*)`,
    },
    handleChange: {
      type: { name: "function", required: true },
      description: `(*formik에서 반드시 넘겨받아야할 prop*)`,
    },
    values: {
      type: { name: "object", required: true, value: {} },
      description: `(*formik에서 반드시 넘겨받아야할 prop*)`,
    },
    errors: {
      type: { name: "object", required: true, value: {} },
      description: `(*formik에서 반드시 넘겨받아야할 prop*)`,
    },
    touched: {
      type: { name: "object", required: true, value: {} },
      description: `(*formik에서 반드시 넘겨받아야할 prop*)`,
    },
    ref: { description: `validation 과정에서 필요한 focus 참조` },
    helpText: {
      description: `기본적으로 표시되는 안내 문구`,
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `formik 기반의 input, textarea, select 구현체`,
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          {/* <Primary /> */}
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary />
        </>
      ),
    },
  },
} as Meta;

const Template: Story<FormControlProps> = (args) => {
  const {
    values,
    errors,
    touched,
    // isValid,
    // isSubmitting,
    // setSubmitting,
    // setFieldValue,
    // setFieldTouched,
    handleChange,
    handleBlur,
    handleSubmit,
    // setValues,
  } = useFormik({
    initialValues: { [args.name]: "" },
    onSubmit: (finalValues) => {
      alert(JSON.stringify(finalValues));
    },
  });

  const formItemProps = { handleBlur, handleChange, values, errors, touched };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl {...args} {...formItemProps} />
    </form>
  );
};

export const Input = Template.bind({});
Input.args = { name: "input" };

export const Password = Template.bind({});
Password.args = {
  name: "password",
  type: "password",
  autoComplete: "new-password",
};

export const Textarea = Template.bind({});
Textarea.args = { name: "textarea", componentType: "textarea" };

export const Select = Template.bind({});
Select.args = {
  name: "select",
  componentType: "select",
  children: (
    <>
      <option value="a">a</option>
      <option value="b">b</option>
    </>
  ),
};
