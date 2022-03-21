import style from './MySelect.module.scss';
import classNames from 'classnames/bind';
import IconDropDown from '@/assets/icon/IconDropDown';
import { BaseSyntheticEvent, ReactNode, useState } from 'react';
const cx = classNames.bind(style);

interface MySelectProps {
  /** 플레이스홀더 */
  placeholder?: string;
  /** 기본값 */
  defaultValue?: string | number;
  /** 하단 옵션리스트가 보이는지 여부 */
  isOpend?: boolean;
  /** 활성화 여부 */
  isDisabled?: boolean;
  /** 셀렉트 옵션 배열 */
  options?: Array<any>;
  children?: ReactNode;
  /** 활성화된 옵션인지 여부 */
  isActive?: boolean;
}

export default function MySelect({
  placeholder = '옵션을 선택해 주세요',
  defaultValue,
  options = [
    {
      id: 'a',
      label: '옵션111',
      active: false,
      disabled: false
    },
    {
      id: 'b',
      label: '옵션2',
      active: true,
      disabled: false
    },
    {
      id: 'c',
      label: '옵션3',
      active: false,
      disabled: true
    }
  ],
  isOpend = false,
  isDisabled = false,
  isActive = false,
  ...props
}: MySelectProps) {
  const [optionList, setOptionList] = useState<Array<any>>(options);
  const [selectedOption, setSelectedOption] = useState<string>(
    optionList.find((opt) => opt.active === true).label
  );
  const [optionVisible, setOptionVisible] = useState<boolean>(false);
  const updateOptionState = () => {
    setOptionVisible(!optionVisible);
  };
  const updateSelectedOption = (e: BaseSyntheticEvent) => {
    setSelectedOption(e.currentTarget.innerText);
    options.map((opt) =>
      opt.id === e.target.id ? (opt.active = true) : (opt.active = false)
    );
    updateOptionState();
  };
  const [optionActive, setOptionActive] = useState<boolean>(false);
  return (
    <div className={cx('select', { isDisabled, isOpend: optionVisible })}>
      <button
        className={cx('selectButton')}
        onClick={updateOptionState}
        disabled={isDisabled}
      >
        <p>
          {selectedOption ?? defaultValue ?? (
            <span className={cx('placeholder')}>{placeholder}</span>
          )}
        </p>
        <IconDropDown className={cx('arrow')} />
      </button>
      {optionVisible && (
        <div className={cx('option')}>
          {options.map((opt) => {
            return opt.active === true ? (
              <button
                className={cx('optionItem', 'isActive')}
                disabled={opt.disabled}
                onClick={updateSelectedOption}
                id={opt.id}
                key={opt.id}
              >
                {opt.label}
              </button>
            ) : (
              <button
                className={cx('optionItem', {
                  isDisabled: opt.disabled
                })}
                disabled={opt.disabled}
                onClick={updateSelectedOption}
                id={opt.id}
                key={opt.id}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
