import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ea, explicabo doloremque minus, amet minima maiores voluptas enim ullam nobis a. Voluptate aliquam praesentium temporibus voluptates vel. Eveniet, quae eos?`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
