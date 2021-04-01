/*
 * @Author: tyson
 * @LastEditTime: 2021-04-01 16:51:22
 * @LastEditors: Please set LastEditors
 * @Description: 生成随机数范围
 * @FilePath: \obtool\util\tools\range.ts
 * 
 * @Date: 2021-04-01 16:50:41
 */

/**
 * @author: Full
 * @description:  生成随机数范围
 * @param {number} num 值
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @return {*}
 * @Date: 2021-04-01 16:50:48
 */
export function range(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
  }