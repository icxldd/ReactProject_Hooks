import { atom } from "recoil";
import { user } from "../types/user";
import { persistAtomEffect } from "./RecoilEffect";

/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 15:46:03
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-19 16:46:31
 */
export const userState = atom({
  key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: {} as user, // default value (aka initial value)
  effects_UNSTABLE:[
    persistAtomEffect('userState')
  ]
});