import { useDebounceFn } from '@/hooks/useDebounceFn';
import _ from 'lodash';
import React, { useCallback, useRef, useState } from 'react';
import MyInput from './../components/MyInput/MyInput';

// export default function SearchTest() {
//   const [searchValue, setSearchValue] = useState('');
//   const sendQuery = (query: string) => {
//     if (query.length === 0) return;
//     console.log(query);
//   };
//   const delayedQueryCall = useRef(_.debounce((q) => sendQuery(q), 500)).current;
//   const handleSearchChange = (e: React.ChangeEvent<any>) => {
//     console.log(';;');
//     console.dir(e.target);
//     // setSearchValue(e.target.value);
//     // sendQuery(e.target.value);
//     // delayedQueryCall(e.target.value);
//   };
//   return (
//     <MyInput
//       id="search"
//       placeholder="검색어를 입력하세요."
//       value={searchValue}
//       onChange={handleSearchChange}
//     />
//   );
// }

export default function SearchTest() {
  const [userQuery, setUserQuery] = useState('');
  const sendQuery = (query: string) => {
    if (query.length === 0) return;
    console.log(query);
  };
  const delayedQuery = useCallback(
    // _.debounce((q) => sendQuery(q), 500),
    // _.throttle((q) => sendQuery(q), 500),
    useDebounceFn((q: any) => sendQuery(q), 500),
    []
  );
  const onChange = (e: React.ChangeEvent<any>) => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };

  return (
    <div>
      <input onChange={onChange} value={userQuery} />
    </div>
  );
}
