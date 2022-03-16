import { Story } from '@storybook/react';
import MyButton, { MyButtonProps } from './MyButton';

export default {
  title: 'Components/MyButton',
  component: MyButton,
  parameters: {
    componentSubtitle: '버튼!'
  }
};

const Template: Story<MyButtonProps> = (args) => <MyButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
