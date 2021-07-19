/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 15:07:13
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-19 15:22:09
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import { resources } from './i18n/resources'
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'zh',
    lng: 'zh',
    debug: true,
    resources: resources,
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;