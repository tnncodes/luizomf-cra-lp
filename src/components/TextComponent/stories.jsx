import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde doloribus rerum illo qui. Illo amet delectus praesentium voluptate rem ullam debitis vel. Expedita quaerat, commodi tenetur quis dicta deleniti velit.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
