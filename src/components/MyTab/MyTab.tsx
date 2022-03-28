import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import style from './MyTab.module.scss';
const cx = classNames.bind(style);

interface myTabProps {
  tabList?: myTabItemProps[];
  activeTabId?: string;
  onChange?: (tab: any) => void;
}

interface myTabItemProps {
  id: string;
  isActive?: boolean;
  label?: string;
  count?: number;
}

export default function MyTab({
  tabList = [],
  activeTabId = tabList[0].id,
  onChange = () => {},
  ...props
}: myTabProps) {
  const [current, setCurrent] = useState<myTabItemProps['id']>(activeTabId);

  useEffect(() => {
    const currentTab = tabList.find((tab) => tab.id === current) ?? tabList[0];
    onChange(currentTab ?? '');
    console.log(current);
  }, [current]);

  // TODO: 도대체... activeTabId 은 어떻게 바꾸는 거짘ㅋㅋㅋㅋㅠㅠ
  useEffect(() => {
    const currentTab = tabList.find((tab) => tab.id === current) ?? tabList[0];
    setCurrent(currentTab?.id ?? '');
    console.log(activeTabId);
  }, [activeTabId]);

  return (
    <div className={cx('myTab')} {...props}>
      {tabList.map((tab) => (
        <button
          className={cx('myTabItem', { isActive: tab.id === current })}
          key={tab.id}
          id={tab.id}
          role="tab"
          aria-selected="true"
          onClick={(e) => {
            setCurrent(tab.id);
          }}
        >
          {tab.label}
          {tab.count && <span className={cx('count')}>{tab.count}</span>}
        </button>
      ))}
    </div>
  );
}
