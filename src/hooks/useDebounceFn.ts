/**
 * debounce가 걸린 함수를 리턴합니다. 아래 예시처럼 사용할 수 있습니다.
 *
 * const debouncedEvent = useDebounceFn<MouseEvent>(someEventFn, 250)
 *
 * const handleClick = (e: MouseEvent) => debouncedEvent(e)
 */
export const useDebounceFn = <Args>(
  /** 실행할 함수 */
  fn: Function,
  /** 디바운스 시간 */
  debounce: number
) => {
  if (debounce === 0) return (args: Args) => fn(args);
  let timeoutId = 0;

  return (args: Args): void => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn(args), debounce);
  };
};
