/*
 * @Author: tyson
 * @LastEditTime: 2021-04-01 16:27:04
 * @LastEditors: Please set LastEditors
 * @Description: 类型检查
 * @FilePath: \obtool\util\tools\type.check.ts
 * 
 * @Date: 2021-04-01 16:26:44
 */


 /**
  * @author: Full
  * @description: 是否是Function
  * @param {unknown} val
  * @return {*} 
  * @Date: 2021-04-01 15:52:59
  */
  export function isFunction(val: unknown): val is Function {
    return typeof val === "function";
  }
  
  /**
   * @author: Full
   * @description: 是否是Object
   * @param {unknown} val
   * @return {*}
   * @Date: 2021-04-01 15:53:40
   */
  export function isObject(val: unknown): val is Record<any, any> {
    return val !== null && typeof val === "object";
  }
  
  /**
   * @author: Full
   * @description: 是否是Promise
   * @param {unknown} val
   * @return {*}
   * @Date: 2021-04-01 15:54:04
   */
  export function isPromise<T = any>(val: unknown): val is Promise<T> {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  }
  
  /**
   * @author: Full
   * @description: 是否是Number
   * @param {string} val
   * @return {*}
   * @Date: 2021-04-01 15:54:22
   */
  export function isNumer(val: string | number): val is string {
    return typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
  }
  
  /**
   * @author: Full
   * @description: 是否是NaN
   * @param {number} val
   * @return {*}
   * @Date: 2021-04-01 15:54:56
   */
  export function isNaN(val: number): val is typeof NaN {
    if (Number.isNaN) {
      return Number.isNaN(val);
    }
  
    // eslint-disable-next-line no-self-compare
    return val !== val;
  }
  
  /**
   * @author: Full
   * @description: 是否是Def
   * @param {T} val
   * @return {*}
   * @Date: 2021-04-01 15:55:25
   */
  export function isDef<T>(val: T): val is NonNullable<T> {
    return val !== undefined && val !== null;
  }
  