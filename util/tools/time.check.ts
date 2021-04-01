/*
 * @Author: tyson
 * @LastEditTime: 2021-04-01 16:23:38
 * @LastEditors: Please set LastEditors
 * @Description: 检查时间
 * @FilePath: \obtool\util\tools\time.ts
 * 
 * @Date: 2021-04-01 16:22:16
 */

/**
 * @author: Full
 * @description: 检查时间
 * @param {unknown} val
 * @return {*}
 * @Date: 2021-04-01 16:03:30
 */
export function isDate(val: unknown): val is Date {
    return (
        Object.prototype.toString.call(val) === "[object Date]" &&
        !isNaN((val as Date).getTime())
    );
}