import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'My title',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Template = (args) => <Heading {...args} />;
