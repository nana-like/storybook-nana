import style from './MyButton.module.scss';
import classNames from 'classnames/bind';
import { ReactNode, useState } from 'react';
const cx = classNames.bind(style);

export interface MyButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  appearance?: 'fill' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'gray';
  isLoading?: boolean;
  isDisabled?: boolean;
  isOnlyIcon?: boolean;
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
}

export default function MyButton({
  className,
  type = 'button',
  appearance = 'fill',
  size = 'medium',
  color = 'primary',
  isDisabled = false,
  isLoading = false,
  children,
  onClick = () => null,
  ...props
}: MyButtonProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(isLoading);
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.dir(e.currentTarget.innerText);
  };
  return (
    <button
      type={type}
      className={cx(`${size}`, loading && 'isLoading', `${color}`)}
      disabled={isDisabled}
      onClick={onButtonClick}
      {...props}
    >
      {children}
      {loading && <span className={cx('loading')}>처리 중...</span>}
    </button>
  );
}
