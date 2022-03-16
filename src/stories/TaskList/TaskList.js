import Task from './../Task/Task';
import PropTypes from 'prop-types';

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED')
  ];

  if (loading) {
    return (
      <div className="list-items" data-testid="loading" key={'loading'}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items" data-testid="empty" key={'empty'}>
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  /** 태스크 목록 */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** 옴뇸뇸 🍦 */
  loading: PropTypes.bool,
  /** 태스크 상태를 Pinned로 변경합니다 */
  onPinTask: PropTypes.func,
  /** 태스크 상태를 archived로 변경합니다 */
  onArchiveTask: PropTypes.func
};
TaskList.defaultProps = {
  loading: false
};
