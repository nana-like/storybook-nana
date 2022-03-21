import style from './MyDropDown.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

interface MyDropDownProps {}

export default function MyDropDown({ ...props }: MyDropDownProps) {
  return (
    <div className={cx('dropDown')}>
      <div className={cx('trigger')}>트리거</div>
      <div className={cx('content')}>컨텐츠</div>
    </div>
  );
}
