/*
 * @Author: tyson
 * @LastEditTime: 2021-04-01 16:50:25
 * @LastEditors: Please set LastEditors
 * @Description: 滚动
 * @FilePath: \obtool\util\tools\scroll.ts
 * 
 * @Date: 2021-04-01 16:36:35
 */

import {
    isIOS
} from "./browser.check";

/**
 * @author: Full
 * @description: 滚动
 * @Date: 2021-04-01 16:37:11
 */
export type ScrollElement = Element | Window;

/**
 * @author: Full
 * @description: 是否是Window
 * @param {unknown} val
 * @return {*}
 * @Date: 2021-04-01 16:37:36
 */
function isWindow(val: unknown): val is Window {
    return val === window;
}

/**
 * @author: Full
 * @description:  获取到顶部距离
 * @param {ScrollElement} el
 * @return {*}
 * @Date: 2021-04-01 16:37:57
 */
export function getScrollTop(el: ScrollElement): number {
    const top = "scrollTop" in el ? el.scrollTop : el.pageYOffset;

    // iOS scroll bounce cause minus scrollTop
    return Math.max(top, 0);
}

/**
 * @author: Full
 * @description: 设置到顶部距离
 * @param {ScrollElement} el
 * @param {number} value
 * @return {*}
 * @Date: 2021-04-01 16:38:15
 */
export function setScrollTop(el: ScrollElement, value: number) {
    if ("scrollTop" in el) {
        el.scrollTop = value;
    } else {
        el.scrollTo(el.scrollX, value);
    }
}

/**
 * @author: Full
 * @description: 获取到顶部距离
 * @param {*}
 * @return {*}
 * @Date: 2021-04-01 16:40:25
 */
export function getRootScrollTop(): number {
    return (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
}

/**
 * @author: Full
 * @description: 设置到顶部距离
 * @param {number} value
 * @return {*}
 * @Date: 2021-04-01 16:43:27
 */
export function setRootScrollTop(value: number) {
    setScrollTop(window, value);
    setScrollTop(document.body, value);
}


/**
 * @author: Full
 * @description: 获取元素顶部到页面顶部或滚动条顶部的距离
 * @param {ScrollElement} el
 * @param {ScrollElement} scroller
 * @return {*}
 * @Date: 2021-04-01 16:47:23
 */
export function getElementTop(el: ScrollElement, scroller ? : ScrollElement) {
    if (isWindow(el)) {
        return 0;
    }

    const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
    return el.getBoundingClientRect().top + scrollTop;
}


/**
 * @author: Full
 * @description: 获得可见高度
 * @param {ScrollElement} el
 * @return {*}
 * @Date: 2021-04-01 16:48:04
 */
export function getVisibleHeight(el: ScrollElement) {
    if (isWindow(el)) {
        return el.innerHeight;
    }
    return el.getBoundingClientRect().height;
}


/**
 * @author: Full
 * @description: 获取可见区域到顶部的距离
 * @param {ScrollElement} el
 * @return {*}
 * @Date: 2021-04-01 16:48:42
 */
export function getVisibleTop(el: ScrollElement) {
    if (isWindow(el)) {
        return 0;
    }
    return el.getBoundingClientRect().top;
}

/**
 * @author: Full
 * @description: 重置滚动条
 * @param {*}
 * @return {*}
 * @Date: 2021-04-01 16:50:04
 */
export function resetScroll() {
    if (isIOS()) {
        setRootScrollTop(getRootScrollTop());
    }
}