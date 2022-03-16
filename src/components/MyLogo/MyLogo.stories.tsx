import { Story } from '@storybook/react';
import MyLogo, { MyLogoProps } from './MyLogo';

export default {
  title: 'Components/MyLogo',
  component: MyLogo,
  parameters: {
    componentSubtitle: '기본 로고입니다.',
    backgrounds: {
      values: [
        { name: '회색', value: '#efefef' },
        { name: '검정색', value: '#111111' }
      ]
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large']
    },
    isTextOnly: {
      control: 'radio',
      options: [true, false]
    },
    ariaLabel: {
      table: {
        category: 'Accessibility'
      }
    }
  }
};

const Template: Story<MyLogoProps> = (args) => <MyLogo {...args} />;

export const Default = Template.bind({});
Default.args = {};
