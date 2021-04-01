/*
 * @Author: tyson
 * @LastEditTime: 2021-04-01 16:21:59
 * @LastEditors: Please set LastEditors
 * @Description: 检查手机号
 * @FilePath: \obtool\util\tools\mobile.ts
 * 
 * @Date: 2021-04-01 16:21:50
 */

 /**
  * @author: Full
  * @description: 检查手机号
  * @param {string} value 手机号
  * @return {*}
  * @Date: 2021-04-01 16:02:13
  */
  export function isMobile(value: string): boolean {
    value = value.replace(/[^-|\d]/g, "");
    return (
      /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value)
    );
  }
  