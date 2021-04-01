/*
 * @Author: tyson
 * @LastEditTime: 2021-04-01 16:29:50
 * @LastEditors: Please set LastEditors
 * @Description: 深度克隆
 * @FilePath: \obtool\util\tools\deep.clone.ts
 * 
 * @Date: 2021-04-01 16:28:15
 */

import {
    isDef
} from './type.check';

/**
 * @author: Full
 * @description: 深度克隆
 * @param {*}
 * @return {*}
 * @Date: 2021-04-01 16:28:28
 */
export function deepClone < T extends Record < string, any > | null | undefined > (
    obj: T
): T {
    if (!isDef(obj)) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return (obj.map((item) => deepClone(item)) as unknown) as T;
    }

    if (typeof obj === "object") {
        const to = {}as Record <string, any> ;
        Object.keys(obj).forEach((key) => {
            to[key] = deepClone(obj[key]);
        });

        return to as T;
    }

    return obj;
}