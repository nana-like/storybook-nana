import style from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

export default function Button({
  disabled = false,
  children = '버튼',
  size = 'medium',
  loading = false,
  color,
  ...props
}) {
  return (
    <button
      className={cx(`${size}`, loading && 'isLoading', `${color}`)}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
