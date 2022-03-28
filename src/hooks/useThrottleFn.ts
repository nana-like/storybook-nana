import { useState } from 'react';

/**
 * throttle이 걸린 함수를 리턴합니다. 아래 예시처럼 사용할 수 있습니다.
 *
 * const throttledEvent = useThrottleFn(someEventFn, 250)
 *
 * const handleScroll = (e: Event) => throttledEvent(e)
 */
export const useThrottleFn = <Args>(
  /** 실행할 함수 */
  fn: Function,
  /** 스로튼 시간 */
  throttle: number
) => {
  const [lastThrottle, setLastThrottle] = useState<number>(0);
  if (throttle === 0) return (args: Args) => fn(args);
  return (args: Args): void => {
    const now = new Date().valueOf();
    if (now - lastThrottle >= throttle) {
      fn(args);
      setLastThrottle(now);
    }
  };
};
