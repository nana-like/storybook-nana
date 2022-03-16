import classNames from 'classnames/bind';
import style from './MyLogo.module.scss';
import Logo from '../../assets/Logo';
const cx = classNames.bind(style);

export interface MyLogoProps {
  /** 로고 크기 */
  size?: 'small' | 'large';
  /** 테두리 없이 글자만 표시할지 여부 */
  isTextOnly?: boolean;
  /** 흰색으로 표시할지 여부 */
  isWhite?: boolean;
  /** 로고의 대체 텍스트 */
  ariaLabel: string;
}

export default function MyLogo({
  size = 'small',
  isTextOnly = false,
  isWhite = false,
  ariaLabel = "Nana's Logo"
}: MyLogoProps) {
  return (
    <div
      className={cx('logo', `${size}`, { isTextOnly, isWhite })}
      aria-label={ariaLabel}
    >
      <Logo isTextOnly={isTextOnly} />
    </div>
  );
}
