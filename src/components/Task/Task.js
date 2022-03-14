import React from 'react';
import PropTypes from 'prop-types';

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
          id={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>
      <div className="actions" onClick={(e) => e.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <button onClick={() => onPinTask(id)}>
            <span
              className={`icon-star`}
              id={`pinTask-${id}`}
              aria-label={`pinTask-${id}`}
            />
          </button>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    /**
      id: 태스크를 식별할 아이디입니다.
    **/
    id: PropTypes.string.isRequired,
    /**
      - 옴뇸뇸
      - 랄랄라
    **/
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
};
