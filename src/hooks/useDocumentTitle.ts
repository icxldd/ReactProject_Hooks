/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 17:38:52
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-19 17:39:12
 */

import { useEffect, useRef } from "react";

export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = useRef(document.title).current;
  // 页面加载时: 旧title
  // 加载后：新title

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        // 如果不指定依赖，读到的就是旧title
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};
