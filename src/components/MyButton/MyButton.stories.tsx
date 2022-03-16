import { Story } from '@storybook/react';
import MyButton, { MyButtonProps } from './MyButton';

export default {
  title: 'Components/MyButton',
  component: MyButton,
  parameters: {
    componentSubtitle: '버튼!'
  }
};

const Template: Story<MyButtonProps> = (args) => (
  <MyButton {...args}>버튼이당</MyButton>
);

export const Default = Template.bind({});
Default.args = {};
