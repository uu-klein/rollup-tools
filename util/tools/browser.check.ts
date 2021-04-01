/*
 * @Author: tyson
 * @LastEditTime: 2021-04-01 16:23:21
 * @LastEditors: Please set LastEditors
 * @Description: 检测设备
 * @FilePath: \obtool\util\tools\browser.ts
 * 
 * @Date: 2021-04-01 16:23:13
 */

/**
 * @author: Full
 * @description: 检测设备
 * @Date: 2021-04-01 14:05:02
 */
 export const inBrowser = typeof window !== "undefined";

 /**
  * @author: Full
  * @description: 是否是安卓
  * @Date: 2021-04-01 14:05:25
  */
 export function isAndroid(): boolean {
     return inBrowser ? /android/.test(navigator.userAgent.toLowerCase()) : false;
 }
 
 /**
  * @author: Full
  * @description: 是否是ios
  * @Date: 2021-04-01 14:05:41
  */
 export function isIOS(): boolean {
     return inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
 }