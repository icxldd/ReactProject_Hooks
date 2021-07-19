/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 16:48:16
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-19 16:50:41
 */
import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: false,
  });
}
