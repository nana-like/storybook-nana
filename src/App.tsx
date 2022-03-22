import '@/styles/styles.scss';
import MyButton from '@/components/MyButton/MyButton';
import IconFilter from './assets/icon/IconFilter';
import MyCheckbox from './components/MyCheckbox/MyCheckbox';
import MySelect from './components/MySelect/MySelect';
import MyDropDown from './components/MyDropDown/MyDropDown';
import MyInput, { MyTestInput } from './components/MyInput/MyInput';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
      {/* <MyTestInput />
      <MyTestInput placeholder="placeholder" />
      <MyTestInput isFocused defaultValue="isFocused" />
      <MyTestInput isDisabled defaultValue="isDisabled" /> */}
      <MyInput id="input1"></MyInput>
      <MyInput id="input2" isFocused defaultValue="isFocused"></MyInput>
      <MyInput id="input3" placeholder="placeholder"></MyInput>
      <MyInput id="input3" isSearchInput defaultValue="isSearchInput"></MyInput>
      <MyInput id="input4" isDisabled defaultValue="isDisabled"></MyInput>
      <header style={{ display: 'none' }} className="App-header">
        <hr />
        <MyButton>그냥 버튼</MyButton>
        <MyButton color="secondary">그냥 버튼</MyButton>
        <MyButton color="tertiary">그냥 버튼</MyButton>
        <MyButton appearance="outline">그냥 버튼</MyButton>
        <MyButton appearance="outline" color="secondary">
          그냥 버튼
        </MyButton>
        <MyButton appearance="outline" color="tertiary">
          그냥 버튼
        </MyButton>
        <MyButton appearance="text">텍스트 버튼</MyButton>
        <MyButton appearance="text" color="secondary" isDisabled>
          isDisabled 버튼
        </MyButton>
        <MyButton appearance="outline" color="tertiary" isDisabled>
          isDisabled 버튼
        </MyButton>
        <MyButton color="tertiary" isLoading>
          isLoading 버튼
        </MyButton>
        <MyButton appearance="outline" isLoading>
          isLoading 버튼
        </MyButton>
        <MyButton appearance="outline" color="secondary" isLoading>
          isLoading 버튼
        </MyButton>
        <MyButton color="tertiary" isFullWidth>
          isFullWidth 버튼
        </MyButton>
        <MyButton appearance="outline" isFullWidth>
          isFullWidth 버튼
        </MyButton>
        <MyButton appearance="outline" color="secondary" isFullWidth>
          isFullWidth 버튼
        </MyButton>
        <MyButton size="small">small 버튼</MyButton>
        <MyButton color="secondary" size="small">
          small 버튼
        </MyButton>
        <MyButton color="tertiary" size="large">
          large 버튼
        </MyButton>
        <MyButton appearance="outline" size="large">
          large 버튼
        </MyButton>
        <MyButton appearance="outline" color="secondary" size="small">
          small 버튼
        </MyButton>
        <MyButton appearance="outline" color="tertiary" size="large">
          large 버튼
        </MyButton>
        <MyButton color="tertiary" size="large" isLoading isFullWidth>
          large , isLoading 버튼
        </MyButton>
        <MyButton appearance="outline" color="secondary" size="small" isLoading>
          small , isLoading 버튼
        </MyButton>
        <MyButton
          appearance="outline"
          color="secondary"
          size="small"
          isOnlyIcon
          ariaLabel="필터"
        >
          <IconFilter />
        </MyButton>
        <MyButton color="tertiary" size="large" isOnlyIcon ariaLabel="필터">
          <IconFilter />
        </MyButton>
        <MyButton isOnlyIcon ariaLabel="필터"></MyButton>
      </header>
    </div>
  );
}

export default App;
