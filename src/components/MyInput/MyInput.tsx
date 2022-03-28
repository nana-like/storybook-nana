import classNames from 'classnames/bind';
import style from './MyInput.module.scss';
import { ReactNode, SyntheticEvent, useRef, useState } from 'react';
import MyButton from '../MyButton/MyButton';
import IconInputClear from '../../assets/icon/IconInputClear';
import IconSearch from '../../assets/icon/IconSearch';
const cx = classNames.bind(style);

export interface MyInputProps {
  /** 인풋 요소를 식별하기 위한 필수값 */
  id: string;
  type?: 'text' | 'email' | 'number' | 'tel' | 'password' | 'textarea';
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  maxLength?: number;
  minNumber?: number;
  maxNumber?: number;
  pattern?: string;
  debounce?: number;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  /** 포커스 상태 여부 (포커스시 clear 버튼 표시됨) */
  isFocused?: boolean;
  /** 돋보기 아이콘 표시 여부 */
  isSearchInput?: boolean;
  /** 에러 상태 표시 여부 */
  isErrorInput?: boolean;
  children?: ReactNode;
  ref?: any;
  onChange?: (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function MyTestInput({
  placeholder = '',
  defaultValue = '',
  isFocused = false,
  isDisabled = false
}) {
  const inputRef = useRef<any>();
  const [value, setValue] = useState(defaultValue);
  const [focused, setFocused] = useState<boolean>(isFocused);
  const [clearButtonVisible, setClearButtonVisible] = useState<boolean>(false);
  const onInputFocus = () => {
    setFocused(true);
    // setClearButtonVisible(inputRef.current.value?.length > 0);
  };
  const onInputChange = (e: any) => {
    // setClearButtonVisible(inputRef.current.value?.length > 0);
    setValue(e.currentTarget.value);
  };
  return (
    <div
      className={cx('myTestInput', { isFocused: focused, isDisabled })}
      onFocus={onInputFocus}
    >
      <input
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={onInputChange}
      />
      {clearButtonVisible && (
        <MyButton
          appearance="pure"
          isOnlyIcon
          ariaLabel="내용 삭제"
          // onClick={onClearButtonClick}
        >
          <IconInputClear />
        </MyButton>
      )}
    </div>
  );
}

export default function MyInput({
  id,
  type = 'text',
  placeholder,
  defaultValue,
  maxLength,
  minNumber,
  maxNumber,
  pattern,
  debounce,
  isFocused = false,
  isDisabled = false,
  isRequired = false,
  isReadOnly = false,
  isSearchInput = false,
  isErrorInput = false,
  children,
  ...props
}: MyInputProps) {
  const [value, setValue] = useState(defaultValue ?? '');
  const [focused, setFocused] = useState<boolean>(isFocused);
  const [clearButtonVisible, setClearButtonVisible] =
    useState<boolean>(isFocused);
  const inputRef = useRef<any>();
  const onInputFocus = () => {
    setFocused(true);
    setClearButtonVisible(inputRef.current.value?.length > 0);
  };
  const onInputBlur = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setFocused(false);
      setClearButtonVisible(false);
    }
  };
  const onClearButtonClick = (e: any) => {
    e.preventDefault();
    setValue('');
    inputRef.current.focus();
    setClearButtonVisible(false);
  };
  const onInputChange = (e: any) => {
    setClearButtonVisible(inputRef.current.value?.length > 0);
    setValue(e.currentTarget.value);
  };
  return (
    <div
      className={cx('myInput', {
        isDisabled,
        isRequired,
        isReadOnly,
        isFocused: focused,
        isSearchInput,
        isErrorInput
      })}
      onFocus={onInputFocus}
      onBlur={onInputBlur}
    >
      {isSearchInput && <IconSearch className={cx('iconSearch')} />}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        disabled={isDisabled}
        required={isRequired}
        readOnly={isReadOnly}
        ref={inputRef}
      />
      {clearButtonVisible && (
        <MyButton
          appearance="pure"
          isOnlyIcon
          ariaLabel="내용 삭제"
          onClick={onClearButtonClick}
        >
          <IconInputClear />
        </MyButton>
      )}
      {children}
    </div>
  );
}
