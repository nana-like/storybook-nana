import style from './MyCheckbox.module.scss';
import classNames from 'classnames/bind';
import { BaseSyntheticEvent, ReactNode, useState } from 'react';
const cx = classNames.bind(style);

interface MyCheckboxProps {
  id: string;
  name?: string;
  className?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function MyCheckbox({
  className,
  id,
  name,
  isChecked = false,
  isDisabled = false,
  children = '체크박스',
  onChange = () => null,
  ...props
}: MyCheckboxProps) {
  const [checked, setChecked] = useState(isChecked);
  const updateChecked = (e: BaseSyntheticEvent) => setChecked(e.target.checked);
  return (
    <div className={cx(className, 'myCheckbox')}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        disabled={isDisabled}
        onChange={updateChecked}
        {...props}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
