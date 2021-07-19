/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 17:43:23
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-19 21:44:35
 */
import styled from '@emotion/styled';
import { Select } from 'antd';
import react, { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next';

const { Option } = Select;

// export const ColorContainer = styled.div<{
//   fontColor?: string;
// }>`
// color:${(props)=>{props.fontColor?}};
// `;

const InlineContainer = styled.div`
  display: inline-block;
  width: auto;
  height: 100%;
`;
const handleChange = (value: any) => {

  console.log(`selected ${value}`);
}
interface SwitchLanguageProps {
  style?: CSSProperties | undefined;
  fontColor?: string
}
export const SwitchLanguage = (props?: SwitchLanguageProps) => {
  const { t, i18n } = useTranslation();
  return (
    <InlineContainer style={props?.style}>
      <h2 style={{ display: 'inline-block', marginRight: '1rem' }}>{t('switchLanguage')}:</h2>
      <Select defaultValue={i18n.language} style={{ width: 120 }} onChange={value => i18n.changeLanguage(value)}>
        <Option value="zh">{t('china')}</Option>
        <Option value="en">{t('english')}</Option>
      </Select>
    </InlineContainer>
  );
}
