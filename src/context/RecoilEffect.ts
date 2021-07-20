/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 16:14:07
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-20 10:56:50
 */
// import { AtomEffect, DefaultValue } from 'recoil';

import { OpenAPI } from "apis";
import { DefaultValue } from "recoil";

// /** Check if there's an initial value persisted and load it on set  */
// const loadPersisted = async <T>({ key, setSelf }: { key: string; setSelf: Parameters<AtomEffect<T>>['0']['setSelf'] }) => {
//   const savedValue = await localStorage.getItem(key);

//   if (savedValue != null) {
//     setSelf(JSON.parse(savedValue));
//   }
// };

// /**
//  * Localstorage Atom Effect
//  *
//  * Add to `effects_UNSTABLE` to persist atom.
//  * Side-effect for Atom Manipulating
//  * @see https://recoiljs.org/docs/guides/atom-effects/
//  */
// export const persistAtomEffect = <T>(key: string): AtomEffect<T> => ({ setSelf, onSet }) => {
//   loadPersisted({ key, setSelf });

//   onSet(async (newValue) => {
//     if (newValue instanceof DefaultValue) {
//       localStorage.removeItem(key);
//     } else {
//       localStorage.setItem(key, JSON.stringify(newValue));
//     }
//   });
// };

type Headers = Record<string, string>;
export const localStorageEffect = (key: string) => ({ setSelf, onSet }: any) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    let obj: any = JSON.parse(savedValue);
    setSelf(obj);
    if (key == 'userState') {
      let heads: Headers = {
        "X-ss-pid": obj.token as string, "X-ss-opt": 'perm'
      };
      OpenAPI.HEADERS = heads;
    }


  }

  onSet((newValue: any) => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  });
};