import TaskList from './TaskList';
import * as TaskStories from './../Task/Task.stories';

export default {
  component: TaskList,
  title: 'Test/TaskList',
  decorators: [(story) => <div style={{ padding: '30px' }}>{story()}</div>],
  parameters: {
    componentSubtitle: '태스크 목록입니다.',
    backgrounds: {
      values: [
        { name: 'crimson', value: 'crimson' },
        { name: 'salmon', value: 'salmon' }
      ]
    }
  }
};

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' }
  ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true
};
Loading.parameters = {
  docs: {
    storyDescription: '로딩 중인 화면입니다. 옴뇸뇸 옴뇸뇸 🍣'
  }
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false
};
