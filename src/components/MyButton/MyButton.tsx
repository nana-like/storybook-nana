import style from './MyButton.module.scss';
import classNames from 'classnames/bind';
import { ReactNode, useState } from 'react';
const cx = classNames.bind(style);

export interface MyButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  appearance?: 'fill' | 'outline' | 'text';
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'large' | 'medium' | 'small';
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isOnlyIcon?: boolean;
  ariaLabel?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent) => void;
}

export default function MyButton({
  className,
  type = 'button',
  appearance = 'fill',
  color = 'primary',
  size = 'medium',
  isFullWidth = false,
  isDisabled = false,
  isLoading = false,
  isOnlyIcon = false,
  ariaLabel,
  onClick = () => null,
  children,
  ...props
}: MyButtonProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(isLoading);
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.dir(e.currentTarget.innerText);
  };
  return (
    <button
      type={type}
      className={cx(`${appearance}`, `${color}`, `${size}`, {
        isFullWidth,
        isDisabled,
        isLoading,
        isOnlyIcon
      })}
      disabled={isDisabled}
      aira-label={ariaLabel}
      onClick={onButtonClick}
      {...props}
    >
      {children}
      {loading && <span className={cx('loading')}>처리 중...</span>}
    </button>
  );
}
