import style from './MyButton.module.scss';
import classNames from 'classnames/bind';
import { ReactNode, useState } from 'react';
const cx = classNames.bind(style);

export interface MyButtonProps {
  className?: string;
  /** 버튼 HTML의 타입값 (기본값: button) */
  type?: 'button' | 'submit' | 'reset';
  /** 버튼 형태 (기본값: fill) */
  appearance?: 'fill' | 'outline' | 'text' | 'pure';
  /** 버튼 색상값 (기본값: primary) */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** 버튼 크기 (기본값: medium) */
  size?: 'large' | 'medium' | 'small';
  /** 버튼 크기의 width: 100% 여부 */
  isFullWidth?: boolean;
  /** 버튼 HTML의 disable 여부 */
  isDisabled?: boolean;
  /** 버튼 텍스트 대신 loader를 표시할지 여부 */
  isLoading?: boolean;
  /** 텍스트 없이 아이콘만 있는 버튼인지 여부 */
  isOnlyIcon?: boolean;
  /** isOnlyIcon 일 때 접근성을 위한 대체 텍스트 */
  ariaLabel?: string;
  children?: ReactNode;
  onClick?: (e: any) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => void;
  onFocus?: (e: any) => void;
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
  children,
  onClick = () => null,
  onMouseDown = () => null,
  onFocus = () => null,
  ...props
}: MyButtonProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(isLoading);
  // const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.dir(e.currentTarget.innerText);
  // };
  return (
    <button
      type={type}
      className={cx(
        className,
        'myButton',
        `${appearance}`,
        `${color}`,
        `${size}`,
        {
          isFullWidth,
          isDisabled,
          isLoading,
          isOnlyIcon
        }
      )}
      disabled={isDisabled}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      {...props}
    >
      {children}
      {loading && <span className={cx('loading')}>처리 중...</span>}
    </button>
  );
}
