/*
 * @Author: tyson
 * @LastEditTime: 2021-04-01 16:35:55
 * @LastEditors: Please set LastEditors
 * @Description: 基于VUE3的类型检测
 * @FilePath: \obtool\util\vue\index.ts
 * 
 * @Date: 2021-04-01 16:06:30
 */

/**
 * @author: tyson
 * @description: 导出
 * @Date: 2021-04-01 16:18:03
 */
import {
    PropType,
    ComponentPublicInstance,
    unref,
    Ref
} from "vue";

/**
 * @author: Full
 * @description: UnknownProp
 * @Date: 2021-04-01 16:07:10
 */
// unknown type for Vue prop
export const UnknownProp = (null as unknown) as PropType < unknown > ;

/**
 * @author: Full
 * @description: ComponentInstance
 * @Date: 2021-04-01 16:07:28
 */
// eslint-disable-next-line
export type ComponentInstance = ComponentPublicInstance < {}, any > ;

/**
 * @author: Full
 * @description: 是否隐藏元素
 * @Date: 2021-04-01 16:35:22
 */
export function isHidden(elementRef: HTMLElement | Ref < HTMLElement | undefined > ) {
    const el = unref(elementRef);
    if (!el) {
        return false;
    }

    const style = window.getComputedStyle(el);
    
    const hidden = style.display === "none";

    // offsetParent returns null in the following situations:
    // 1. The element or its parent element has the display property set to none.
    // 2. The element has the position property set to fixed
    const parentHidden = el.offsetParent === null && style.position !== "fixed";

    return hidden || parentHidden;
}