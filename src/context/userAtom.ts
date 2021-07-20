import { atom } from "recoil";
import { user } from "../types/user";
import { localStorageEffect } from "./RecoilEffect";

/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 15:46:03
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-20 09:44:28
 */
export const userState = atom({
  key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: {} as user, // default value (aka initial value)
  effects_UNSTABLE:[
    localStorageEffect('userState')
  ]
});